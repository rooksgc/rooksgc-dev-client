import { FC } from 'react'
import { Layout, Menu } from 'antd'
import { useLocation, useHistory } from 'react-router-dom'
import {
  UploadOutlined,
  VideoCameraOutlined,
  LockOutlined,
  UnlockOutlined
} from '@ant-design/icons'
import PrivateContainer from '../../../containers/Private'
import useEscape from '../../../hooks/useEscape'
import useShallowEqualSelector from '../../../hooks/useShallowEqualSelector'
import { setActiveChannelId } from '../../../modules/Chat/actions'
import useActions from '../../../hooks/useActions'

interface IChannel {
  id: number
  label: string
}

interface ISidebarProps {
  sidebarCollapsed: boolean
  onSidebarToggle: (isCollapsed: boolean) => void
  onCurrentChannelChange: (channel: IChannel) => void
}

const { Sider } = Layout

const channels = [
  {
    id: 1,
    label: 'Общий чат',
    icon: <UploadOutlined />
  },
  {
    id: 2,
    label: 'Тестовый канал',
    icon: <VideoCameraOutlined />
  },
  {
    id: 3,
    label: 'Двач рандомач',
    icon: <UploadOutlined />
  },
  {
    id: 4,
    label: 'Клюб любителей сосуль',
    icon: <VideoCameraOutlined />
  },
  {
    id: 5,
    label: 'Сплавы и бани',
    icon: <UploadOutlined />
  },
  {
    id: 6,
    label: 'Походы и перда',
    icon: <VideoCameraOutlined />
  },
  {
    id: 7,
    label: 'Группа, которая скрывается пердунов',
    icon: <UploadOutlined />
  },
  {
    id: 8,
    label: 'Котики и слоники',
    icon: <VideoCameraOutlined />
  },
  {
    id: 9,
    label: 'Мир диких программистов',
    icon: <UploadOutlined />
  },
  {
    id: 10,
    label: 'Пакеты мусора для бедных',
    icon: <VideoCameraOutlined />
  },
  {
    id: 11,
    label: 'Покурим бамбук',
    icon: <UploadOutlined />
  },
  {
    id: 12,
    label: 'Упоротые суслики',
    icon: <VideoCameraOutlined />
  },
  {
    id: 13,
    label: 'Скучный вторник',
    icon: <UploadOutlined />
  },
  {
    id: 14,
    label: 'Бегу, а волосы назад',
    icon: <UploadOutlined />
  },
  {
    id: 15,
    label: 'Поперхнись-ка',
    icon: <UploadOutlined />
  },
  {
    id: 16,
    label: 'Войти в АйТИ',
    icon: <UploadOutlined />
  },
  {
    id: 17,
    label: 'Посторонним ВЭ',
    icon: <UploadOutlined />
  },
  {
    id: 18,
    label: 'Подслушано в Дедовске',
    icon: <UploadOutlined />
  }
]

const Sidebar: FC<ISidebarProps> = (props: ISidebarProps) => {
  const { sidebarCollapsed, onSidebarToggle, onCurrentChannelChange } = props
  const location = useLocation()
  const history = useHistory()
  const [dispatchActiveChannelId] = useActions([setActiveChannelId], null)
  const activeChannelId = useShallowEqualSelector(
    (state) => state.chat.activeChannelId
  )

  useEscape(() => {
    if (location.pathname !== '/' || !activeChannelId) return
    dispatchActiveChannelId('')
    onCurrentChannelChange({ id: 0, label: '' })
  })

  const onClickMenu = ({ key }) => {
    if (key === activeChannelId) return
    if (location.pathname !== '/') {
      history.push('/')
    }

    const { id, label } = channels.find((item) => String(item.id) === key)

    dispatchActiveChannelId(key)
    onSidebarToggle(true)
    onCurrentChannelChange({ id, label })
  }

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
        <LockOutlined className="sidebar-lock" />
        <UnlockOutlined />
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
