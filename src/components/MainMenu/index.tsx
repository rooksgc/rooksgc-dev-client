import { FC } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { Menu } from 'antd'
import { PieChartOutlined } from '@ant-design/icons'

const menuItems = [
  {
    key: 'login',
    label: 'Войти',
    path: '/auth/login',
    icon: <PieChartOutlined />
  },
  {
    key: 'register',
    label: 'Регистрация',
    path: '/auth/register',
    icon: <PieChartOutlined />
  }
]

const MainMenu: FC = () => {
  const location = useLocation()
  const history = useHistory()

  const key = menuItems.find((item) => location.pathname === item.path)?.key
  if (!key) return null

  const onClickMenu = (item) => {
    if (item.key === key) return
    const clicked = menuItems.find((_item) => _item.key === item.key)
    history.push(clicked.path)
  }

  return (
    <Menu mode="horizontal" selectedKeys={[key]} onClick={onClickMenu}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export { MainMenu }
