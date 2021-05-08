import { FC, useState } from 'react'
import { Layout, Menu, Avatar } from 'antd'
import { LockOutlined, UnlockOutlined, MessageFilled } from '@ant-design/icons'
import { Scrollbars } from 'react-custom-scrollbars'
import useEscape from 'hooks/useEscape'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import { setActiveChannel } from 'modules/Chat/actions'
import useActions from 'hooks/useActions'
import { IChannelData } from 'components/Chat/Messages'
import SidebarMenu from './SidebarMenu'

const { Sider } = Layout

interface ISidebarProps {
  sidebarCollapsed: boolean
  onSidebarToggle: (isCollapsed: boolean) => void
}

const renderTrackVertical = ({ style, ...ownProps }) => (
  <div
    {...ownProps}
    className="scrollTrackVertical"
    style={{
      ...style,
      backgroundColor: '#E5E5E5',
      right: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px'
    }}
  />
)

const renderThumbVertical = ({ style, ...ownProps }) => (
  <div
    {...ownProps}
    className="scrollThumbVertical"
    style={{
      ...style,
      borderRadius: '4px',
      boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.16)',
      backgroundColor: '#9A9A9A'
    }}
  />
)

const Sidebar: FC<ISidebarProps> = (props: ISidebarProps) => {
  const [sidebarLocked, setSidebarLocked] = useState(true)
  const { sidebarCollapsed, onSidebarToggle } = props
  const [dispatchActiveChannel] = useActions([setActiveChannel], null)
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
    const { name, type } = place[channelId]

    const intChannelId = parseInt(channelId, 10)
    dispatchActiveChannel({ id: intChannelId, name, type })

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
          <span className="channels-menu-title">Каналы</span>
          {(channels && Object.keys(channels).length && (
            <Scrollbars
              style={{ height: 'calc(50vh - 58px)' }}
              hideTracksWhenNotNeeded
              autoHide
              autoHideTimeout={400}
              renderTrackVertical={renderTrackVertical}
              renderThumbVertical={renderThumbVertical}
            >
              <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectedMenuKey}
                onClick={onClickMenu}
              >
                {Object.entries(channels as IChannelData).map(
                  ([channelId, channel]) => (
                    <Menu.Item key={`${channel.type}-${channelId}`}>
                      {channel.photo ? (
                        <Avatar className="channel-photo" src={channel.photo} />
                      ) : (
                        <Avatar
                          className="channel-photo"
                          icon={<MessageFilled style={{ color: '#fefefe' }} />}
                        />
                      )}

                      <span className="channel-name">{channel.name}</span>
                    </Menu.Item>
                  )
                )}
              </Menu>
            </Scrollbars>
          )) || <p className="nocontent">нет каналов</p>}
        </div>

        <div className="contacts-menu">
          <span className="contacts-menu-title">Контакты</span>
          {(contacts && Object.keys(contacts).length && (
            <Scrollbars
              style={{ height: 'calc(50vh - 58px)' }}
              hideTracksWhenNotNeeded
              autoHide
              autoHideTimeout={400}
              renderTrackVertical={renderTrackVertical}
              renderThumbVertical={renderThumbVertical}
            >
              <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectedMenuKey}
                onClick={onClickMenu}
              >
                {Object.entries(contacts as IChannelData).map(
                  ([channelId, channel]) => (
                    <Menu.Item key={`${channel.type}-${channelId}`}>
                      {channel.name}
                    </Menu.Item>
                  )
                )}
              </Menu>
            </Scrollbars>
          )) || <p className="nocontent">нет контактов</p>}
        </div>
      </Sider>
    </>
  )
}

export default Sidebar
