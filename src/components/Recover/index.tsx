import { FC, useState } from 'react'
import { Form, Input, Button, Card, Alert, Spin } from 'antd'
import { MailOutlined, LoadingOutlined } from '@ant-design/icons'
import { authService } from 'services/auth'

interface IFormValues {
  email: string
}

const Recover: FC = () => {
  const emptyMessage = { type: '', message: '' }
  const [form] = Form.useForm()
  const [alert, setAlert] = useState(emptyMessage)
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: IFormValues) => {
    try {
      setAlert(emptyMessage)
      setLoading(true)

      const { email } = values
      const { type, message } = await authService.recover({
        email
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
      <Card className="card" title="Восстановление пароля">
        {alert.message && (
          <Alert
            className="alert"
            message={alert.message}
            type={alert.type as any}
          />
        )}
        {alert.type !== 'success' && (
          <>
            <p>
              Укажите email, указанный при регистрации и мы вышлем на него
              ссылку для восстановления пароля.
            </p>
            <Form
              form={form}
              name="recover"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              validateTrigger="onBlur"
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: 'email',
                    message: 'Некорректный email!'
                  }
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Email"
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
                size="large"
                type="primary"
                htmlType="submit"
                block
                disabled={loading}
              >
                Восстановить пароль
              </Button>
            </Form>
          </>
        )}
      </Card>
    </div>
  )
}

export { Recover }
