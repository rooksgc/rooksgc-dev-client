import { FC, useState, useEffect, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { PieChartOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import { RootState } from '../../modules'
import useActions from '../../hooks/useActions'
import { logoutUserRequest } from '../../modules/Auth/actions'

const unauthorizedItems = [
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

const authorizedItems = [
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
  const [selectedKey, setSelectedKey] = useState('')
  const location = useLocation()
  const history = useHistory()
  const user = useShallowEqualSelector((state: RootState) => state.auth.user)

  const [dispatchLogoutUserRequest] = useActions([logoutUserRequest], null)

  const menuItems = useCallback(
    () => (user ? authorizedItems : unauthorizedItems),
    [user]
  )

  const onClickMenu = (item) => {
    const clicked = menuItems().find((_item) => _item.key === item.key)
    if (clicked.name === 'logout') {
      dispatchLogoutUserRequest()
      history.push('/auth/login')
      return
    }

    history.push(clicked!.path)
  }

  const findSelectedKey = useCallback(() => {
    const selectedItem = menuItems().find(
      (item) => location.pathname === item.path
    )
    return selectedItem?.key || ''
  }, [location.pathname, menuItems])

  useEffect(() => {
    setSelectedKey(findSelectedKey())
  }, [location, findSelectedKey])

  return (
    <Menu
      style={{ float: 'right' }}
      mode="horizontal"
      selectedKeys={[selectedKey]}
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
