import { FC } from 'react'
import { Form, Input, Button, Card } from 'antd'
import { MailOutlined } from '@ant-design/icons'

const Recover: FC = () => {
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo)
  }

  return (
    <div className="card-container">
      <Card className="card-centered" title="Восстановление пароля">
        <p>
          Укажите email, указанный при регистрации и мы вышлем на него ссылку
          для восстановления пароля.
        </p>
        <Form
          name="recover"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Введите Email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Button size="large" type="primary" htmlType="submit" block>
            Восстановить пароль
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default Recover
