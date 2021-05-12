import { FC, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Menu, Dropdown, Avatar } from 'antd'
import {
  UserOutlined,
  LogoutOutlined,
  ProfileOutlined
} from '@ant-design/icons'
import { useActions } from 'hooks/useActions'
import { ModalWindow } from 'containers/ModalWindow'
import { userLogoutRequest } from 'modules/Auth/actions'
import { UserDTO } from 'services/auth'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { UserProfile } from '../UserProfile'

const UserMenu: FC = () => {
  const [userProfileModalVisibility, setUserProfileModalVisibility] = useState(
    false
  )
  const { photo } = useShallowEqualSelector(
    (state) => state.auth.user
  ) as UserDTO
  const history = useHistory()
  const [dispatchUserLogoutRequest] = useActions([userLogoutRequest], null)

  const handleMenuClick = (event) => {
    const { key } = event

    switch (key) {
      case 'profile':
        setUserProfileModalVisibility(true)
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
          className="user-profile"
          src={photo && photo}
          icon={<UserOutlined />}
        />
      </Dropdown>
      <ModalWindow
        title="Профиль"
        visible={userProfileModalVisibility}
        onCancel={() => setUserProfileModalVisibility(false)}
        onOk={() => setUserProfileModalVisibility(false)}
      >
        <UserProfile
          onCancel={() => setUserProfileModalVisibility(false)}
          onOk={() => setUserProfileModalVisibility(false)}
        />
      </ModalWindow>
    </>
  )
}

export { UserMenu }
