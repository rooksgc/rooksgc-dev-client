import { FC, useState } from 'react'
import { Menu, Dropdown } from 'antd'
import {
  MenuOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
  SettingOutlined
} from '@ant-design/icons'
import ModalWindow from 'containers/ModalWindow'
import CreateChannel from '../CreateChannel'

const SidebarMenu: FC = () => {
  const [
    createChannelModalVisibility,
    setCreateChannelModalVisibility
  ] = useState(false)

  const handleMenuClick = (event) => {
    const { key } = event

    switch (key) {
      case 'createChannel':
        setCreateChannelModalVisibility(true)
        break
      default:
        break
    }
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="createChannel" icon={<UsergroupAddOutlined />}>
        Создать канал
      </Menu.Item>
      <Menu.Item key="addContact" icon={<UserAddOutlined />}>
        Добавить контакт
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="contacts" icon={<ContactsOutlined />}>
        Контакты
      </Menu.Item>
      <Menu.Item key="settings" icon={<SettingOutlined />}>
        Настройки
      </Menu.Item>
    </Menu>
  )

  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <MenuOutlined className="sidebar-icon" />
      </Dropdown>
      <ModalWindow
        title="Создать канал"
        visible={createChannelModalVisibility}
        onCancel={() => setCreateChannelModalVisibility(false)}
      >
        <CreateChannel
          onCancel={() => setCreateChannelModalVisibility(false)}
          onOk={() => setCreateChannelModalVisibility(false)}
        />
      </ModalWindow>
    </>
  )
}

export default SidebarMenu
