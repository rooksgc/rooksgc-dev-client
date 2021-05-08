import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { UserDTO } from 'services/auth'

const UserProfile = () => {
  const { name, email, role } = useShallowEqualSelector(
    (state) => state.auth.user
  ) as UserDTO
  return (
    <>
      <p>Имя: {name}</p>
      <p>Email: {email}</p>
      <p>Роль: {role}</p>
    </>
  )
}

export default UserProfile
