import { FC } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Menu, Dropdown, Avatar } from 'antd'
import {
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined
} from '@ant-design/icons'
import useActions from '../../hooks/useActions'
import { logoutUserRequest } from '../../modules/Auth/actions'

const UserMenu: FC = () => {
  const location = useLocation()
  const history = useHistory()
  const [dispatchLogoutUserRequest] = useActions([logoutUserRequest], null)

  const handleMenuClick = (event) => {
    const { key } = event
    if (location.pathname === `/user/${key}`) return

    switch (key) {
      case 'profile':
        history.push('/user/profile')
        break
      case 'logout':
        dispatchLogoutUserRequest()
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
    <Dropdown overlay={menu} trigger={['click']}>
      <Avatar className="user-profile" icon={<UserOutlined />} />
    </Dropdown>
  )
}

export default UserMenu
