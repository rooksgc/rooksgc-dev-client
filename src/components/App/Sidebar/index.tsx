import { FC, useState } from 'react'
import { Layout, Menu } from 'antd'
import { useLocation } from 'react-router-dom'
import { DesktopOutlined } from '@ant-design/icons'
import PrivateContainer from '../../../containers/Private'
import ws from '../../../services/socket'
import useEscape from '../../../hooks/useEscape'
import useShallowEqualSelector from '../../../hooks/useShallowEqualSelector'
import { setActiveRoomId } from '../../../modules/Chat/actions'
import useActions from '../../../hooks/useActions'

const { Sider } = Layout

const rooms = [
  {
    id: 1,
    label: 'Общий чат',
    icon: <DesktopOutlined />
  },
  {
    id: 2,
    label: 'Тестовая комната',
    icon: <DesktopOutlined />
  }
]

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const [dispatchActiveRoomId] = useActions([setActiveRoomId], null)
  const activeRoomId = useShallowEqualSelector(
    (state) => state.chat.activeRoomId
  )

  useEscape(() => {
    if (location.pathname !== '/chat' || !activeRoomId) return
    ws.socket.emit('room:leave', activeRoomId)
    dispatchActiveRoomId('')
  })

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed)
  }

  const onClickMenu = ({ key }) => {
    if (key === activeRoomId) return
    if (activeRoomId) {
      ws.socket.emit('room:leave', activeRoomId)
    }
    ws.socket.emit('room:join', key)
    dispatchActiveRoomId(key)
  }

  return (
    <PrivateContainer>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        className="sider"
        theme="dark"
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[activeRoomId as string]}
          onClick={onClickMenu}
        >
          {rooms.map((item) => (
            <Menu.Item key={item.id} icon={item.icon}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </PrivateContainer>
  )
}

export default Sidebar
