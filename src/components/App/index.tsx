import { FC, useEffect, useRef } from 'react'
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
  const SR = useRef(null)
  const [dispatchAddChannelMessage] = useActions([addChannelMessage], null)
  const { activeChannelId } = useShallowEqualSelector(
    (state) => state.chat
  ) as any

  useEffect(() => {
    if (!WS.socket) return null

    SR.current = WS.socket
    SR.current.on(
      'channel:message:broadcast',
      ({ activeChannelId: channelId, message, from }) => {
        dispatchAddChannelMessage({ activeChannelId: channelId, message, from })
      }
    )

    return () => {
      SR.current.off('channel:message:broadcast')
    }
  }, [activeChannelId, dispatchAddChannelMessage])

  return (
    <Layout className="wrap-layout">
      <Sidebar />
      <Layout className="site-layout">
        <Header />
        <Content className="content">
          <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
