import { FC, useState } from 'react'
import { Form, Input, message, Button, Spin, Typography } from 'antd'
import { LoadingOutlined, MailOutlined } from '@ant-design/icons'
import { ModalWindow } from 'containers/ModalWindow'
import { userService, UserDTO } from 'services/user'
import { useActions } from 'hooks/useActions'
import { addContact } from 'modules/Chat/actions'
import { changeAddContactModalState } from 'modules/Modals/actions'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'

const { Text } = Typography

interface IFormValues {
  email: string
}

interface IAddContactProps {}

const AddContact: FC<IAddContactProps> = () => {
  const addContactModalState = useShallowEqualSelector(
    (state) => state.modals.addContact
  ) as any
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [dispatchChangeAddContactModalState, dispatchAddContact] = useActions(
    [changeAddContactModalState, addContact],
    null
  )

  const onFinish = async (values: IFormValues) => {
    try {
      const { email } = values
      setLoading(true)

      const {
        type,
        message: serverMessage,
        data
      } = await userService.addContact({
        from: user.id,
        email
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

      dispatchAddContact(data)

      setLoading(false)
      dispatchChangeAddContactModalState(false)
    } catch (error) {
      setLoading(false)
      message.error(error.message)
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
