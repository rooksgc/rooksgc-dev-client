import { FC } from 'react'
import { Form, Input, Button } from 'antd'
import { SendOutlined } from '@ant-design/icons'

interface FormValues {
  text: string
}

interface IChatInputProps {
  sendMessage: (text: string) => void
}

const ChatInput: FC<IChatInputProps> = ({ sendMessage }) => {
  const [form] = Form.useForm()

  const onFinish = async (values: FormValues) => {
    try {
      const { text } = values
      sendMessage(text)
      form.resetFields()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }
  return (
    <div className="chat-input">
      <Form size="large" className="input-form" form={form} onFinish={onFinish}>
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
}

export default ChatInput
