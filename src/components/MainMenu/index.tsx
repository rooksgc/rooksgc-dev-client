import { FC } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Menu } from 'antd'
import { PieChartOutlined } from '@ant-design/icons'
import useActions from '../../hooks/useActions'
import { logoutUserRequest } from '../../modules/Auth/actions'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'

const unauthorizedMenu = [
  {
    key: '1',
    name: 'login',
    label: 'Войти',
    path: '/auth/login',
    icon: <PieChartOutlined />
  },
  {
    key: '2',
    name: 'register',
    label: 'Регистрация',
    path: '/auth/register',
    icon: <PieChartOutlined />
  }
]

const authorizedMenu = [
  {
    key: '1',
    name: 'home',
    label: 'Главная',
    path: '/',
    icon: <PieChartOutlined />
  },
  {
    key: '2',
    name: 'logout',
    label: 'Выйти',
    path: '/auth/logout',
    icon: <PieChartOutlined />
  }
]

const MainMenu: FC = () => {
  const location = useLocation()
  const history = useHistory()
  const [dispatchLogoutUserRequest] = useActions([logoutUserRequest], null)
  const user = useShallowEqualSelector((state) => state.auth.user)

  const menuItems = () => (user ? authorizedMenu : unauthorizedMenu)

  const key = menuItems().find((item) => location.pathname === item.path)?.key

  const onClickMenu = (item) => {
    const clicked = menuItems().find((_item) => _item.key === item.key)
    if (clicked.name === 'logout') {
      dispatchLogoutUserRequest()
      history.push('/auth/login')
      return
    }

    history.push(clicked!.path)
  }

  return (
    <Menu
      className="mainMenu"
      mode="horizontal"
      selectedKeys={[key]}
      onClick={onClickMenu}
    >
      {menuItems().map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default MainMenu
