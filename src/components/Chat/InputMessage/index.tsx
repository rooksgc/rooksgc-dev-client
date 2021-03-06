import { FC, memo } from 'react'
import { Form, Input, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'
import { notify } from 'services/notification'

interface IFormValues {
  text: string
}

interface IChatInputProps {
  sendMessage: (text: string) => void
}

const InputMessage: FC<IChatInputProps> = memo(({ sendMessage }) => {
  const [form] = Form.useForm()

  const sendMessageHandler = (values: IFormValues) => {
    try {
      const { text } = values
      sendMessage(text)
      form.resetFields()
    } catch (error) {
      notify.error(error.message)
    }
  }
  return (
    <div className="chat-input">
      <Form
        size="large"
        className="input-form"
        form={form}
        onFinish={sendMessageHandler}
      >
        <Form.Item className="input-messaage" required name="text">
          <Input autoFocus placeholder="Введите сообщение" />
        </Form.Item>
        <Form.Item className="send-button">
          <Button htmlType="submit" type="primary" icon={<SendOutlined />}>
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
})

export { InputMessage }
