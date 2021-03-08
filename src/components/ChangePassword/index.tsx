import { FC, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Form, Input, Button, Card, Alert } from 'antd'
import { LockOutlined } from '@ant-design/icons'
import authService from '../../services/auth'

interface ChangePasswordParams {
  code?: string
}

interface FormValues {
  password: string
  confirmPassword: string
}

const ChangePassword: FC = () => {
  const { code }: ChangePasswordParams = useParams()
  const emptyMessage = { type: '', message: '' }
  const [alert, setAlert] = useState(emptyMessage)
  const [secretError, setSecretError] = useState(false)
  const [changeSuccess, setChangeSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const checkSecret = async () => {
      const { type, message } = await authService.checkSecret({
        code,
        secretType: 'RECOVER_PASSWORD'
      })
      if (type === 'error') {
        setAlert({ type, message })
        setSecretError(true)
      }
    }

    if (
      code.match(
        /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
      )
    ) {
      checkSecret()
    } else {
      setAlert({ type: 'error', message: 'Неверный секретный код!' })
      setSecretError(true)
    }
  }, [code])

  const onFinish = async (values: FormValues) => {
    try {
      setAlert(emptyMessage)
      setLoading(true)

      const { password } = values
      const { type, message } = await authService.changePassword({
        code,
        password
      })

      if (message) {
        setAlert({ type, message })
        setLoading(false)
        if (type === 'error') return
      }

      setChangeSuccess(true)
      setLoading(false)
    } catch (error) {
      setAlert(error)
      setLoading(false)
    }
  }

  return (
    <div className="flex-center">
      <Card className="card" title="Изменение пароля">
        {alert.message && (
          <Alert
            className="alert"
            message={alert.message}
            type={alert.type as any}
          />
        )}

        {changeSuccess && (
          <p>
            Теперь Вы можете <Link to="/auth/login">Войти</Link> в приложение
          </p>
        )}

        {!secretError && !changeSuccess && (
          <>
            <p>Придумайте новый пароль</p>
            <Form
              name="change-password-request"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
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
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                  { required: true, message: 'Введите подтверждение пароля!' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error('Пароли должны совпадать!')
                      )
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

              <Button
                className="submit-button"
                type="primary"
                htmlType="submit"
                size="large"
                block
                disabled={loading}
              >
                Изменить пароль
              </Button>
            </Form>
          </>
        )}
      </Card>
    </div>
  )
}

export default ChangePassword
