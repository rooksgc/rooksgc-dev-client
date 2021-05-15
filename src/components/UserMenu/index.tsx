import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, Dropdown, Avatar } from 'antd'
import {
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined
} from '@ant-design/icons'
import { useActions } from 'hooks/useActions'
import { changeUserProfileModalState } from 'modules/Modals/actions'

import { userLogoutRequest } from 'modules/Auth/actions'
import { UserDTO } from 'services/user'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { UserProfile } from 'components/Modals/UserProfile'

const UserMenu: FC = () => {
  const history = useHistory()

  const { photo } = useShallowEqualSelector(
    (state) => state.auth.user
  ) as UserDTO

  const [
    dispatchUserLogoutRequest,
    dispatchChangeUserProfileModalState
  ] = useActions([userLogoutRequest, changeUserProfileModalState], null)

  const handleMenuClick = (event) => {
    const { key } = event

    switch (key) {
      case 'profile':
        dispatchChangeUserProfileModalState(true)
        break
      case 'logout':
        dispatchUserLogoutRequest()
        history.push('/auth/login')
        break
      default:
        break
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<ProfileOutlined />}>
        Профиль
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Выход
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <Avatar
          size={40}
          className="user-profile"
          src={photo && photo}
          icon={<UserOutlined />}
        />
      </Dropdown>
      <UserProfile />
    </>
  )
}

export { UserMenu }
