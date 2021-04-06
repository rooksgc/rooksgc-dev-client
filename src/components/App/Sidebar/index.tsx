import { FC, useState } from 'react'
import { Layout, Menu } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import { DesktopOutlined } from '@ant-design/icons'
import PrivateContainer from '../../../containers/Private'
import useEscape from '../../../hooks/useEscape'
import useShallowEqualSelector from '../../../hooks/useShallowEqualSelector'
import { setActiveChannelId } from '../../../modules/Chat/actions'
import useActions from '../../../hooks/useActions'

const { Sider } = Layout

const channels = [
  {
    id: 1,
    label: 'Общий чат',
    icon: <DesktopOutlined />
  },
  {
    id: 2,
    label: 'Тестовый канал',
    icon: <DesktopOutlined />
  }
]

const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const location = useLocation()
  const history = useHistory()
  const [dispatchActiveChannelId] = useActions([setActiveChannelId], null)
  const activeChannelId = useShallowEqualSelector(
    (state) => state.chat.activeChannelId
  )

  useEscape(() => {
    if (location.pathname !== '/' || !activeChannelId) return
    dispatchActiveChannelId('')
  })

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed)
  }

  const onClickMenu = ({ key }) => {
    if (key === activeChannelId) return
    if (location.pathname !== '/') {
      history.push('/')
    }
    dispatchActiveChannelId(key)
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
          selectedKeys={[activeChannelId as string]}
          onClick={onClickMenu}
        >
          {channels.map((item) => (
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
