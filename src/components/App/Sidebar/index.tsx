import { FC, useState } from 'react'
import { Layout, Menu, Avatar } from 'antd'
import {
  LockOutlined,
  UnlockOutlined,
  ClockCircleTwoTone,
  PlusCircleOutlined
} from '@ant-design/icons'
import { useEscape } from 'hooks/useEscape'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { setActiveChannel } from 'modules/Chat/actions'
import { useActions } from 'hooks/useActions'
import { IChannelData, IContactData } from 'components/Chat/Messages'
import {
  changeCreateChannelModalState,
  changeAddContactModalState
} from 'modules/Modals/actions'
import { Scrollbar } from 'containers/Scrollbar'
import { SidebarMenu } from './SidebarMenu'

const { Sider } = Layout

interface ISidebarProps {
  sidebarCollapsed: boolean
  onSidebarToggle: (isCollapsed: boolean) => void
}

const Sidebar: FC<ISidebarProps> = (props: ISidebarProps) => {
  const [sidebarLocked, setSidebarLocked] = useState(true)
  const { sidebarCollapsed, onSidebarToggle } = props
  const [
    dispatchActiveChannel,
    dispatchChangeCreateChannelModalState,
    dispatchChangeAddContactModalState
  ] = useActions(
    [
      setActiveChannel,
      changeCreateChannelModalState,
      changeAddContactModalState
    ],
    null
  )
  const chat = useShallowEqualSelector((state) => state.chat) as any
  const { activeChannel, channels, contacts } = chat

  useEscape(() => {
    if (!activeChannel) return
    dispatchActiveChannel(null)
  })

  const onClickMenu = ({ key }) => {
    if (activeChannel) {
      const { id, type } = activeChannel
      if (key === `${type}-${id}`) return
    }

    const [channelType, channelId] = key.split('-')
    const place = channelType === 'channel' ? channels : contacts
    const { name, type, isInvite, text } = place[channelId]
    const intChannelId = parseInt(channelId, 10)

    dispatchActiveChannel({ id: intChannelId, name, type, isInvite, text })

    if (!sidebarLocked) {
      onSidebarToggle(true)
    }
  }

  const selectedMenuKey = activeChannel
    ? [`${activeChannel.type}-${activeChannel.id}`]
    : []

  return (
    <>
      <Sider
        trigger={null}
        collapsed={sidebarCollapsed}
        collapsedWidth={0}
        className="sider"
        theme="dark"
        width="230"
        style={{
          overflow: 'auto',
          height: '100vh'
        }}
      >
        <div className="sidebar-top">
          <SidebarMenu />
          {sidebarLocked ? (
            <LockOutlined
              title="Отмена фиксации"
              className="sidebar-icon"
              onClick={() => setSidebarLocked(false)}
            />
          ) : (
            <UnlockOutlined
              title="Фиксировать меню"
              className="sidebar-icon"
              onClick={() => setSidebarLocked(true)}
            />
          )}
        </div>

        <div className="channels-menu">
          <div className="sidebar-top">
            <span className="channels-menu-title">Каналы</span>
            <PlusCircleOutlined
              className="sidebar-icon"
              title="Создать канал"
              onClick={() => dispatchChangeCreateChannelModalState(true)}
            />
          </div>

          {(channels && (
            <Scrollbar style={{ height: 'calc(50vh - 100px)' }}>
              <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectedMenuKey}
                onClick={onClickMenu}
              >
                {Object.entries(channels as IChannelData[]).map(
                  ([channelId, channel]) => (
                    <Menu.Item
                      className="channels-menu-item"
                      style={{ height: '50px' }}
                      key={`${channel.type}-${channelId}`}
                    >
                      {channel.photo ? (
                        <Avatar
                          size={40}
                          className="channel-photo"
                          src={channel.photo}
                        />
                      ) : (
                        <Avatar
                          size={40}
                          className="channel-photo"
                          icon={
                            <ClockCircleTwoTone style={{ color: '#fefefe' }} />
                          }
                        />
                      )}
                      <span className="channel-name">{channel.name}</span>
                    </Menu.Item>
                  )
                )}
              </Menu>
            </Scrollbar>
          )) || <p className="nocontent">нет каналов</p>}
        </div>

        <div className="contacts-menu">
          <div className="sidebar-top">
            <span className="contacts-menu-title">Контакты</span>
            <PlusCircleOutlined
              className="sidebar-icon"
              title="Добавить контакт"
              onClick={() => dispatchChangeAddContactModalState(true)}
            />
          </div>
          {(contacts && (
            <Scrollbar style={{ height: 'calc(50vh - 100px)' }}>
              <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectedMenuKey}
                onClick={onClickMenu}
              >
                {Object.entries(contacts as IContactData[]).map(
                  ([contactId, contact]) => (
                    <Menu.Item
                      className="contacts-menu-item"
                      style={{ height: '50px' }}
                      key={`${contact.type}-${contactId}`}
                    >
                      <Avatar
                        size={40}
                        className="contact-photo"
                        src={
                          contact.photo ? (
                            contact.photo
                          ) : (
                            <ClockCircleTwoTone style={{ fontSize: '40px' }} />
                          )
                        }
                      />
                      <span className="channel-name">{contact.name}</span>
                    </Menu.Item>
                  )
                )}
              </Menu>
            </Scrollbar>
          )) || <p className="nocontent">нет контактов</p>}
        </div>
      </Sider>
    </>
  )
}

export { Sidebar }
