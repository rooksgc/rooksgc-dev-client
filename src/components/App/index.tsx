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
  const [needRecreateRef, setNeedRecreateRef] = useState(0)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState([])
  const SR = useRef(null)
  const [dispatchAddChannelMessage] = useActions([addChannelMessage], null)
  const activeChannel = useShallowEqualSelector(
    (state) => state.chat.activeChannel
  ) as any
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO

  const onSidebarToggle = (isCollapsed: boolean) => {
    setSidebarCollapsed(isCollapsed)
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

    WS.socket.on('users', (users) => {
      // users.forEach((user) => {
      // user.self = user.userId === WS.socket.id
      // initReactiveProperties(user)
      // dispatchUpdateUsersOnline(users)
      // })
      // put the current user first, and then sort by username
      setOnlineUsers(
        users.sort((a, b) => {
          if (a.self) return -1
          if (b.self) return 1
          if (a.username < b.username) return -1
          return a.username > b.username ? 1 : 0
        })
      )
      // dispatchUpdateUsersOnline(users)

      // eslint-disable-next-line no-console
      console.log(onlineUsers)
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
  }, [user, activeChannel, dispatchAddChannelMessage, needRecreateRef])

  return (
    <Layout className="wrap-layout">
      <Sidebar
        sidebarCollapsed={sidebarCollapsed}
        onSidebarToggle={onSidebarToggle}
      />
      <Layout className="site-layout">
        <Header
          sidebarCollapsed={sidebarCollapsed}
          onSidebarToggle={onSidebarToggle}
        />
        <Content className="content">
          <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
