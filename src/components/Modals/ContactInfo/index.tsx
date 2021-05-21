import { FC, useState } from 'react'
import {
  Button,
  message,
  Avatar,
  Typography,
  Row,
  Col,
  Divider,
  Spin
} from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { UserDTO } from 'services/user'
import { chatService } from 'services/chat'
import { useActions } from 'hooks/useActions'
import { changeContactInfoModalState } from 'modules/Modals/actions'
import { IActiveChannel } from 'modules/Chat/reducer'
import { removeContact, setActiveChannel } from 'modules/Chat/actions'
import { userRemoveContact } from 'modules/Auth/actions'

const { Title, Paragraph } = Typography

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
    dispatchActiveChannel
  ] = useActions(
    [
      changeContactInfoModalState,
      removeContact,
      userRemoveContact,
      setActiveChannel
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
          message.success(serverMessage)
        }
        if (type === 'error') {
          message.error(serverMessage)
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
      message.error(error.message)
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
        <Col flex="150px">
          <Avatar size={128} src={photo} />
        </Col>
        <Col flex="auto">
          <Title level={4}>{name}</Title>
          <Paragraph>ID: {activeContact.id}</Paragraph>
          <Paragraph>Email: {email}</Paragraph>
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
        <Button
          block
          danger
          type="default"
          onClick={removeContactHandler}
          disabled={loading}
        >
          Удалить контакт
        </Button>
      </div>
    </ModalWindow>
  )
}

export { ContactInfo }
