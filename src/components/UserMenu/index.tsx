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
import { ModalWindow } from 'containers/ModalWindow'
import { userLogoutRequest } from 'modules/Auth/actions'
import { UserDTO } from 'services/auth'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { UserProfile } from '../UserProfile'

const UserMenu: FC = () => {
  const history = useHistory()

  const { photo } = useShallowEqualSelector(
    (state) => state.auth.user
  ) as UserDTO
  const { userProfile } = useShallowEqualSelector(
    (state) => state.modals
  ) as any

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
      <ModalWindow
        title="Профиль"
        visible={userProfile}
        onCancel={() => dispatchChangeUserProfileModalState(false)}
        onOk={() => dispatchChangeUserProfileModalState(false)}
      >
        <UserProfile
          onCancel={() => dispatchChangeUserProfileModalState(false)}
          onOk={() => dispatchChangeUserProfileModalState(false)}
        />
      </ModalWindow>
    </>
  )
}

export { UserMenu }
