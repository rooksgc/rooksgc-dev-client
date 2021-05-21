import { FC, useState, useEffect } from 'react'
import { UserDTO } from 'services/user'
import { Layout } from 'antd'
import { PrivateContainer } from 'containers/Private'
import { sendChannelMessage, sendContactMessage } from 'modules/Chat/actions'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { useActions } from 'hooks/useActions'
import { socketService } from 'services/socket'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Routes } from '../Routes'

const { Content } = Layout

const App: FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [dispatchSendChannelMessage, dispatchSendContactMessage] = useActions(
    [sendChannelMessage, sendContactMessage],
    null
  )
  const activeChannel = useShallowEqualSelector(
    (state) => state.chat.activeChannel
  ) as any
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO

  const onSidebarToggle = (isCollapsed: boolean) => {
    setSidebarCollapsed(isCollapsed)
  }

  useEffect(() => {
    socketService.subscribeToDisconnect(user)

    socketService.subscribeToChannelMessageBroadcast(
      ({ activeChannelId: channelId, message }) => {
        dispatchSendChannelMessage({
          activeChannelId: channelId,
          message
        })
      }
    )

    socketService.subscribeToContactMessagePrivate((message, from) => {
      dispatchSendContactMessage({
        activeChannelId: from,
        message
      })
    })

    return () => {
      socketService.unsubscribeFrom([
        'channel:message:broadcast',
        'contact:message:private'
      ])
    }
  }, [
    user,
    activeChannel,
    dispatchSendChannelMessage,
    dispatchSendContactMessage
  ])

  return (
    <Layout className="wrap-layout">
      <PrivateContainer>
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          onSidebarToggle={onSidebarToggle}
        />
      </PrivateContainer>

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

export { App }
