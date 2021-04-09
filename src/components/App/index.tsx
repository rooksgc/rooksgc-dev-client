import { FC, useState, useEffect, useRef } from 'react'
import { UserDTO } from 'src/services/auth'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import Routes from '../Routes'
import { addChannelMessage } from '../../modules/Chat/actions'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import useActions from '../../hooks/useActions'
import WS from '../../services/socket'

const { Content } = Layout

const App: FC = () => {
  const [currentChannel, setCurrentChannel] = useState('')
  const [needRecreateRef, setNeedRecreateRef] = useState(0)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const SR = useRef(null)
  const [dispatchAddChannelMessage] = useActions([addChannelMessage], null)
  const { activeChannelId } = useShallowEqualSelector(
    (state) => state.chat
  ) as any
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO

  const onSidebarToggle = (isCollapsed: boolean) => {
    setSidebarCollapsed(isCollapsed)
  }
  const onCurrentChannelChange = ({ label }) => {
    setCurrentChannel(label)
  }

  useEffect(() => {
    if (!WS.socket) return null
    SR.current = WS.socket

    // Correct reconnection after server emits disconnected event
    WS.socket.on('disconnect', (reason: string) => {
      if (reason === 'transport error' || reason === 'ping timeout') {
        if (!user) return
        WS.disconnect()
        WS.connect(user)
        setNeedRecreateRef((state) => state + 1)
      }
    })

    SR.current.on(
      'channel:message:broadcast',
      ({ activeChannelId: channelId, message, from }) => {
        dispatchAddChannelMessage({ activeChannelId: channelId, message, from })
      }
    )

    return () => {
      SR.current.off('channel:message:broadcast')
    }
  }, [user, activeChannelId, dispatchAddChannelMessage, needRecreateRef])

  return (
    <Layout className="wrap-layout">
      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        onSidebarToggle={onSidebarToggle}
        onCurrentChannelChange={onCurrentChannelChange}
      />
      <Layout className="site-layout">
        <Header
          sidebarCollapsed={sidebarCollapsed}
          onSidebarToggle={onSidebarToggle}
          currentChannel={currentChannel}
        />
        <Content className="content">
          <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
