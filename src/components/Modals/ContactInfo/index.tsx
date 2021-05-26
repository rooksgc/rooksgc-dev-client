import { FC, useState } from 'react'
import { Button, Avatar, Typography, Row, Col, Divider, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { UserDTO } from 'services/user'
import { chatService } from 'services/chat'
import { useActions } from 'hooks/useActions'
import { changeContactInfoModalState } from 'modules/Modals/actions'
import { IActiveChannel } from 'modules/Chat/reducer'
import {
  removeContact,
  setActiveChannel,
  addContact
} from 'modules/Chat/actions'
import { userRemoveContact } from 'modules/Auth/actions'
import { socketService } from 'services/socket'
import { notify } from 'services/notification'

const { Title, Paragraph, Text } = Typography

interface IContactInfoProps {
  activeContact: IActiveChannel
}

const ContactInfo: FC<IContactInfoProps> = (props) => {
  const { activeContact } = props
  const [loading, setLoading] = useState(false)

  const [
    dispatchChangeContactInfoModalState,
    dispatchRemoveContact,
    dispatchUserRemoveContact,
    dispatchActiveChannel,
    dispatchAddContact
  ] = useActions(
    [
      changeContactInfoModalState,
      removeContact,
      userRemoveContact,
      setActiveChannel,
      addContact
    ],
    null
  )

  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO

  const contacts = useShallowEqualSelector(
    (state) => state.chat.contacts
  ) as UserDTO

  const contactInfo = useShallowEqualSelector(
    (state) => state.modals.contactInfo
  ) as any

  const contact = activeContact && contacts && contacts[activeContact.id]
  if (!contact) return null

  const { name, email, photo } = contact as UserDTO

  const removeContactHandler = async () => {
    try {
      setLoading(true)

      const { type, message: serverMessage } = await chatService.removeContact({
        userId: user.id,
        contactId: activeContact.id
      })

      if (serverMessage) {
        if (type === 'success') {
          notify.success(serverMessage)
        }
        if (type === 'error') {
          notify.success(serverMessage)
          setLoading(false)
          return
        }
      }

      dispatchRemoveContact(activeContact.id)
      dispatchUserRemoveContact(activeContact.id)
      dispatchActiveChannel(null)
      dispatchChangeContactInfoModalState(false)

      setLoading(false)
    } catch (error) {
      notify.error(error.message)
    }
  }

  const cancelInviteHandler = async () => {
    try {
      setLoading(true)

      const { type, message: serverMessage } = await chatService.removeInvite({
        inviterId: user.id,
        userId: activeContact.id
      })

      if (serverMessage) {
        if (type === 'success') {
          notify.success(serverMessage)
        }
        if (type === 'error') {
          notify.error(serverMessage)
          setLoading(false)
          return
        }
      }

      dispatchRemoveContact(activeContact.id)
      dispatchActiveChannel(null)
      dispatchChangeContactInfoModalState(false)

      socketService.cancelInviteRequest({ to: activeContact.id, contact: user })

      setLoading(false)
    } catch (error) {
      notify.error(error.message)
    }
  }

  const removeInviteHandler = async () => {
    try {
      setLoading(true)

      const { type, message: serverMessage } = await chatService.removeInvite({
        inviterId: activeContact.id,
        userId: user.id
      })

      if (serverMessage) {
        if (type === 'success') {
          notify.success(serverMessage)
        }
        if (type === 'error') {
          notify.error(serverMessage)
          setLoading(false)
          return
        }
      }

      dispatchRemoveContact(activeContact.id)
      dispatchActiveChannel(null)
      dispatchChangeContactInfoModalState(false)

      socketService.removeInviteRequest({ to: activeContact.id, contact: user })

      setLoading(false)
    } catch (error) {
      notify.error(error.message)
    }
  }

  const addContactHandler = async () => {
    try {
      setLoading(true)

      const {
        type,
        message: serverMessage,
        data
      } = await chatService.addContact({
        inviterId: activeContact.id,
        userId: user.id
      })

      if (serverMessage) {
        if (type === 'success') {
          dispatchAddContact({
            ...data,
            type: 'contact',
            messages: []
          })
          dispatchActiveChannel({
            ...data,
            type: 'contact'
          })

          socketService.addContactRequest({
            to: data.id,
            contact: {
              ...user,
              type: 'contact',
              messages: []
            }
          })

          notify.success(serverMessage)
        }
        if (type === 'error') {
          // @todo refactor
          if (serverMessage === 'Пользователь отменил свое приглашение') {
            dispatchRemoveContact(activeContact.id)
            dispatchUserRemoveContact(activeContact.id)
            dispatchActiveChannel(null)
          }

          notify.error(serverMessage)
        }
      }

      dispatchChangeContactInfoModalState(false)
      setLoading(false)
    } catch (error) {
      notify.error(error.message)
    }
  }

  return (
    <ModalWindow
      title="Информация"
      visible={contactInfo}
      onCancel={() => dispatchChangeContactInfoModalState(false)}
      onOk={() => dispatchChangeContactInfoModalState(false)}
    >
      <Row align="middle">
        {!contact.isContactRequest && !contact.isInvite && (
          <Col flex="150px">
            <Avatar size={128} src={photo} />
          </Col>
        )}
        <Col flex="auto">
          <Title level={4}>{name}</Title>
          {email && <Paragraph>Email: {email}</Paragraph>}
          {contact.isContactRequest && (
            <Text type="secondary">
              Отправлен запрос на добавление в список контактов
            </Text>
          )}
          {contact.isInvite && (
            <Text type="secondary">
              Пользователь хочет добавить Вас в свой список контактов
            </Text>
          )}
        </Col>
      </Row>
      <Divider />
      <div className="form-footer">
        {loading && (
          <Spin
            className="center"
            indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
            delay={500}
          />
        )}
        {contact.isContactRequest ? (
          <Button
            block
            danger
            type="default"
            onClick={cancelInviteHandler}
            disabled={loading}
          >
            Отменить запрос за добавление
          </Button>
        ) : contact.isInvite ? (
          <div className="stretch-container">
            <Button block onClick={addContactHandler} disabled={loading}>
              Добавить
            </Button>
            <Button
              block
              danger
              onClick={removeInviteHandler}
              disabled={loading}
            >
              Отказать
            </Button>
          </div>
        ) : (
          <Button
            block
            danger
            type="default"
            onClick={removeContactHandler}
            disabled={loading}
          >
            Удалить контакт
          </Button>
        )}
      </div>
    </ModalWindow>
  )
}

export { ContactInfo }
