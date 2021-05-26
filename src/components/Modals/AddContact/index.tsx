import { FC, useState } from 'react'
import { Form, Input, Button, Spin, Typography } from 'antd'
import { LoadingOutlined, MailOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { UserDTO } from 'services/user'
import { chatService } from 'services/chat'
import { socketService } from 'services/socket'
import { notify } from 'services/notification'
import { useActions } from 'hooks/useActions'
import { addContact, setActiveChannel } from 'modules/Chat/actions'
import { changeAddContactModalState } from 'modules/Modals/actions'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'

const { Text } = Typography
const { TextArea } = Input

interface IFormValues {
  email: string
  text?: string
}

interface IAddContactProps {}

const AddContact: FC<IAddContactProps> = () => {
  const addContactModalState = useShallowEqualSelector(
    (state) => state.modals.addContact
  ) as any
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [
    dispatchChangeAddContactModalState,
    dispatchAddContact,
    dispatchActiveChannel
  ] = useActions(
    [changeAddContactModalState, addContact, setActiveChannel],
    null
  )

  const onFinish = async (values: IFormValues) => {
    try {
      const { email, text } = values
      setLoading(true)

      const {
        type,
        message: serverMessage,
        data: invitedUser
      } = await chatService.inviteToContacts({
        inviterId: user.id,
        inviterName: user.name,
        inviterEmail: user.email,
        inviterContacts: user.contacts,
        email,
        text
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

      form.resetFields()

      const addContactPayload = {
        ...invitedUser,
        type: 'contact',
        messages: []
      }

      const activeChannelPayload: any = {
        id: invitedUser.id,
        name: invitedUser.name,
        type: 'contact'
      }

      if (!invitedUser.contactAdded) {
        addContactPayload.isContactRequest = true
        addContactPayload.text = text
        activeChannelPayload.isContactRequest = true
        activeChannelPayload.text = text
      }

      dispatchAddContact(addContactPayload)
      dispatchActiveChannel(activeChannelPayload)
      dispatchChangeAddContactModalState(false)

      socketService.inviteContactRequest({
        to: invitedUser.id,
        contact: {
          ...user,
          isInvite: true,
          photo: null,
          text,
          type: 'contact',
          messages: []
        }
      })

      setLoading(false)
    } catch (error) {
      setLoading(false)
      notify.error(error.message)
    }
  }

  return (
    <ModalWindow
      title="Добавить контакт"
      visible={addContactModalState}
      onCancel={() => dispatchChangeAddContactModalState(false)}
    >
      <Text>Введите Email контакта, которого Вы хотели добавить</Text>
      <Form
        form={form}
        name="addContact"
        className="add-contact-form"
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: 'email',
              min: 4,
              message: 'Некорректный email'
            }
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
        </Form.Item>

        <Form.Item name="text">
          <TextArea
            rows={4}
            placeholder="Сообщение для пользователя (необязательно)"
          />
        </Form.Item>

        <div className="form-footer">
          {loading && (
            <Spin
              className="center"
              indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
              delay={500}
            />
          )}
          <Button
            key="back"
            onClick={() => dispatchChangeAddContactModalState(false)}
            disabled={loading}
          >
            Отмена
          </Button>
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            disabled={loading}
          >
            Добавить
          </Button>
        </div>
      </Form>
    </ModalWindow>
  )
}

export { AddContact }
