import { FC } from 'react'
import { Menu, Dropdown } from 'antd'
import {
  MenuOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
  SettingOutlined
} from '@ant-design/icons'
import { useActions } from 'hooks/useActions'
import {
  changeCreateChannelModalState,
  changeAddContactModalState
} from 'modules/Modals/actions'
import { CreateChannel } from 'components/Modals/CreateChannel'
import { AddContact } from 'components/Modals/AddContact'

export interface ISidebarMenuProps {}

const SidebarMenu: FC<ISidebarMenuProps> = () => {
  const [
    dispatchChangeCreateChannelModalState,
    dispatchChangeAddContactModalState
  ] = useActions(
    [changeCreateChannelModalState, changeAddContactModalState],
    null
  )

  const handleMenuClick = (event) => {
    const { key } = event

    switch (key) {
      case 'createChannel':
        dispatchChangeCreateChannelModalState(true)
        break
      case 'addContact':
        dispatchChangeAddContactModalState(true)
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
      <CreateChannel />
      <AddContact />
    </>
  )
}

export { SidebarMenu }
