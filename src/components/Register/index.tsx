import { Form, Input, Button, Card, Alert, Spin } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  LoadingOutlined
} from '@ant-design/icons'
import { FC, useState } from 'react'
import authService from '../../services/auth'

const Register: FC = () => {
  const [form] = Form.useForm()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: any) => {
    try {
      setError('')
      setLoading(true)

      const { name, email, password } = values
      const response = await authService.create({ name, email, password })

      if ('error' in response) {
        setError(response.error)
        setSuccess('')
        setLoading(false)
        return
      }

      setError('')
      setSuccess(`
        Пользователь создан. Активируйте свой аккаунт, выполнив
        переход по ссылке из письма, которое выслано на адрес: ${email}`)
      form.resetFields()
      setLoading(false)
    } catch (e) {
      setLoading(false)
      setError(
        'Сервер не отвечает или временно недоступен. Повторите попытку позже.'
      )
    }
  }

  return (
    <div className="flex-center">
      <Card className="card" title="Регистрация">
        {error && (
          <Alert className="alert" closable message={error} type="error" />
        )}
        {success && (
          <Alert className="alert" closable message={success} type="success" />
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
          >
            Зарегистрироваться
          </Button>
        </Form>
      </Card>
    </div>
  )
}

export default Register
