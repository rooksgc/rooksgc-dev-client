import { Card } from 'antd'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import { UserDTO } from '../../services/auth'

const UserProfile = () => {
  const { name, email, role } = useShallowEqualSelector(
    (state) => state.auth.user
  ) as UserDTO
  return (
    <>
      <Card title="Профиль" bordered={false} style={{ maxWidth: 500 }}>
        <p>Имя: {name}</p>
        <p>Email: {email}</p>
        <p>Роль: {role}</p>
      </Card>
    </>
  )
}

export default UserProfile
