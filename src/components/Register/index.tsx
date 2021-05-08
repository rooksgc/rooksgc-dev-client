import { FC, useState } from 'react'
import { Form, Input, Button, Card, Alert, Spin } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  LoadingOutlined
} from '@ant-design/icons'
import authService from 'services/auth'

interface FormValues {
  name: string
  email: string
  password: string
}

const Register: FC = () => {
  const emptyMessage = { type: '', message: '' }
  const [form] = Form.useForm()
  const [alert, setAlert] = useState(emptyMessage)
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: FormValues) => {
    try {
      setAlert(emptyMessage)
      setLoading(true)

      const { name, email, password } = values
      const { type, message } = await authService.register({
        name,
        email,
        password
      })

      if (message) {
        setAlert({ type, message })
        setLoading(false)
        if (type === 'error') return
      }

      form.resetFields()
      setLoading(false)
    } catch (error) {
      setAlert(error)
      setLoading(false)
    }
  }

  return (
    <div className="flex-center">
      <Card className="card" title="Регистрация">
        {alert.message && (
          <Alert
            className="alert"
            message={alert.message}
            type={alert.type as any}
          />
        )}
        <Form
          form={form}
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          validateTrigger="onBlur"
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message:
                  "Имя должно содержать минимум 4 символа английского или русского алфавита, допустимы цифры и знаки '- _'",
                pattern: /^[a-zA-Zа-яА-ЯёЁ0-9-_\s]{4,}$/
              }
            ]}
          >
            <Input placeholder="Имя" size="large" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              { required: true, type: 'email', message: 'Некорректный email' }
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите пароль! Минимум 6 символов.',
                min: 6
              }
            ]}
          >
            <Input.Password
              placeholder="Пароль"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="confirm-password"
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Введите подтверждение пароля! Минимум 6 символов.',
                min: 6
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(new Error('Пароли должны совпадать!'))
                }
              })
            ]}
          >
            <Input.Password
              placeholder="Пароль еще раз"
              prefix={<LockOutlined />}
              size="large"
            />
          </Form.Item>

          {loading && (
            <Spin
              className="center"
              indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />}
              delay={500}
            />
          )}

          <Button
            className="submit-button"
            type="primary"
            htmlType="submit"
            size="large"
            block
            disabled={loading}
          >
            Зарегистрироваться
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default Register
