import { FC, useState } from 'react'
import { Form, Input, Button, Card, Alert, Spin } from 'antd'
import { MailOutlined, LockOutlined, LoadingOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import authService from '../../services/auth'

interface FormValues {
  email: string
  password: string
}

const Login: FC = () => {
  const emptyMessage = { type: '', message: '' }
  const [form] = Form.useForm()
  const [alert, setAlert] = useState(emptyMessage)
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: FormValues) => {
    try {
      setAlert(emptyMessage)
      setLoading(true)

      const { email, password } = values
      const { type, message } = await authService.login({
        email,
        password
      })

      if (message) {
        setAlert({ type, message })
        setLoading(false)
        if (type === 'error') return
      }

      // todo form.resetFields() ?
      setLoading(false)

      // todo Выполнен логин, редирект куда-то ?
    } catch (error) {
      setAlert(error)
      setLoading(false)
    }
  }

  return (
    <div className="flex-center">
      <Card className="card" title="Войти">
        {alert.message && (
          <Alert
            className="alert"
            message={alert.message}
            type={alert.type as any}
          />
        )}
        <Form
          form={form}
          name="login"
          className="login-form"
          initialValues={{ remember: true }}
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

          <Form.Item
            name="password"
            rules={[{ required: true, min: 6, message: 'Минимум 6 символов' }]}
          >
            <Input.Password
              placeholder="Пароль"
              prefix={<LockOutlined />}
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

          {loading && (
            <Spin
              className="center"
              indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
              delay={500}
            />
          )}

          <Button size="large" type="primary" htmlType="submit" block>
            Войти
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default Login
