import { FC } from 'react'
import { Button, message, Avatar, Typography, Row, Col, Divider } from 'antd'
import { ModalWindow } from 'containers/ModalWindow'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { UserDTO } from 'services/user'
import { useActions } from 'hooks/useActions'
import { changeContactInfoModalState } from 'modules/Modals/actions'
import { IActiveChannel } from 'modules/Chat/reducer'

const { Title, Paragraph } = Typography

interface IContactInfoProps {
  activeContact: IActiveChannel
}

const ContactInfo: FC<IContactInfoProps> = (props) => {
  const { activeContact } = props

  const [dispatchChangeContactInfoModalState] = useActions(
    [changeContactInfoModalState],
    null
  )

  const contacts = useShallowEqualSelector(
    (state) => state.chat.contacts
  ) as UserDTO

  const contactInfo = useShallowEqualSelector(
    (state) => state.modals.contactInfo
  ) as any

  const contact = activeContact && contacts[activeContact.id]

  if (!contact) return null

  const { name, email, photo } = contact as UserDTO

  const removeContactHandler = async () => {
    // Удалить контакт
    try {
      dispatchChangeContactInfoModalState(false)
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
        <Button block danger type="default" onClick={removeContactHandler}>
          Удалить контакт
        </Button>
      </div>
    </ModalWindow>
  )
}

export { ContactInfo }
