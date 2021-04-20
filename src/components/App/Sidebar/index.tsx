import { FC, useState } from 'react'
import { Layout, Menu } from 'antd'
import { LockOutlined, UnlockOutlined } from '@ant-design/icons'
import PrivateContainer from '../../../containers/Private'
import useEscape from '../../../hooks/useEscape'
import useShallowEqualSelector from '../../../hooks/useShallowEqualSelector'
import { setActiveChannel } from '../../../modules/Chat/actions'
import useActions from '../../../hooks/useActions'
import { IChannelData } from '../../Chat/Messages'

interface ISidebarProps {
  sidebarCollapsed: boolean
  onSidebarToggle: (isCollapsed: boolean) => void
}

const { Sider } = Layout

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
    <PrivateContainer>
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
          {sidebarLocked ? (
            <LockOutlined
              title="Отмена фиксации"
              className="sidebar-locker"
              onClick={() => setSidebarLocked(false)}
            />
          ) : (
            <UnlockOutlined
              title="Фиксировать меню"
              className="sidebar-locker"
              onClick={() => setSidebarLocked(true)}
            />
          )}
        </div>
        {channels && (
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={selectedMenuKey}
            onClick={onClickMenu}
          >
            {Object.entries(channels as IChannelData).map(
              ([channelId, channel]) => (
                <Menu.Item key={`${channel.type}-${channelId}`}>
                  {channel.name}
                </Menu.Item>
              )
            )}
          </Menu>
        )}
        {contacts && (
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
        )}
      </Sider>
    </PrivateContainer>
  )
}

export default Sidebar
