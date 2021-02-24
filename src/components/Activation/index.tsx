import { FC, useState, useEffect } from 'react'
import { Card, Alert } from 'antd'
import { Link, useParams } from 'react-router-dom'
import authService from '../../services/auth'

interface ActivationParams {
  code?: string
}

const Activation: FC = () => {
  const { code }: ActivationParams = useParams()
  const emptyMessage = { type: '', message: '' }
  const [alert, setAlert] = useState(emptyMessage)

  useEffect(() => {
    const activateUser = async () => {
      const { type, message } = await authService.activate(code)
      if (message) {
        setAlert({ type, message })
      }
    }
    activateUser()
  }, [code])

  return (
    <div className="flex-center">
      <Card className="card" title="Активация нового пользователя">
        {alert.message && (
          <Alert
            className="alert"
            message={alert.message}
            type={alert.type as any}
          />
        )}
        <Link className="login-link" to="/auth/login">
          Вход
        </Link>
        <Link className="link-recover" to="/auth/recover">
          Восстановить пароль
        </Link>
      </Card>
    </div>
  )
}

export default Activation
