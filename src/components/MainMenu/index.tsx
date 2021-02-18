import React, { FC, useState, useEffect, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { PieChartOutlined } from '@ant-design/icons'
import { Menu } from 'antd'

const menuItems = [
  { key: '1', label: 'Главная', path: '/', icon: <PieChartOutlined /> },
  { key: '2', label: 'Войти', path: '/auth/login', icon: <PieChartOutlined /> },
  {
    key: '3',
    label: 'Регистрация',
    path: '/auth/register',
    icon: <PieChartOutlined />
  }
]

const MainMenu: FC = () => {
  const [selectedKey, setSelectedKey] = useState('')
  const location = useLocation()
  const history = useHistory()

  const onClickMenu = (item) => {
    const clicked = menuItems.find((_item) => _item.key === item.key)
    history.push(clicked!.path)
  }

  const findSelectedKey = useCallback(() => {
    const selectedItem = menuItems.find(
      (item) => location.pathname === item.path
    )
    return selectedItem?.key || ''
  }, [location.pathname])

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
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  )
}

export default MainMenu
