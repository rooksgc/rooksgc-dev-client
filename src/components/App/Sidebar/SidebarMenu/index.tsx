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
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { changeCreateChannelModalState } from 'modules/Modals/actions'
import { ModalWindow } from 'containers/ModalWindow'
import { CreateChannel } from '../CreateChannel'

export interface ISidebarMenuProps {}

const SidebarMenu: FC<ISidebarMenuProps> = () => {
  const { createChannel } = useShallowEqualSelector(
    (state) => state.modals
  ) as any

  const [dispatchChangeCreateChannelModalState] = useActions(
    [changeCreateChannelModalState],
    null
  )

  const handleMenuClick = (event) => {
    const { key } = event

    switch (key) {
      case 'createChannel':
        dispatchChangeCreateChannelModalState(true)
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
        visible={createChannel}
        onCancel={() => dispatchChangeCreateChannelModalState(false)}
      >
        <CreateChannel
          onCancel={() => dispatchChangeCreateChannelModalState(false)}
          onOk={() => dispatchChangeCreateChannelModalState(false)}
        />
      </ModalWindow>
    </>
  )
}

export { SidebarMenu }
