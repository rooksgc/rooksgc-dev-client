import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'

const Register = () => {
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
      <Card style={{ width: 500, margin: '0 auto' }} title="Регистрация">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Введите имя пользователя (минимум 4 символа)',
                min: 4
              }
            ]}
          >
            <Input placeholder="Имя" size="large" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Введите Ваш Email!' }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Введите пароль!' }]}
          >
            <Input.Password
              placeholder="Пароль"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm-password"
            rules={[
              { required: true, message: 'Введите подтверждение пароля!' }
            ]}
          >
            <Input.Password
              placeholder="Пароль еще раз"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>

          <Button
            className="submit-button"
            type="primary"
            htmlType="submit"
            size="large"
            block
          >
            Зарегистрироваться
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default Register
