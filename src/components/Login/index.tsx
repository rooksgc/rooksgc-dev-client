import { Form, Input, Button, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const Login = () => {
  const onFinish = (values: any) => {
    // eslint-disable-next-line no-console
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    // eslint-disable-next-line no-console
    console.log(errorInfo)
  }

  return (
    <div className="flex-center">
      <Card className="card" title="Войти">
        <Form
          name="login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
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
            <Input
              prefix={<UserOutlined />}
              placeholder="Имя пользователя"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, min: 6, message: 'Минимум 6 символов' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Пароль"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Form.Item name="register" noStyle>
              <Link to="/auth/register">Регистрация</Link>
            </Form.Item>

            <Link className="link-recover" to="/auth/recover">
              Забыли пароль?
            </Link>
          </Form.Item>

          <Button size="large" type="primary" htmlType="submit" block>
            Войти
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default Login
