import { FC } from 'react'
import { Layout, Badge } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import useShallowEqualSelector from 'src/hooks/useShallowEqualSelector'
import MainMenu from '../../MainMenu'
import UserMenu from '../../UserMenu'
import PrivateContainer from '../../../containers/Private'

interface IHeaderProps {
  sidebarCollapsed: boolean
  onSidebarToggle: (isCollapsed: boolean) => void
}

const { Header: AntHeader } = Layout

const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const activeChannel = useShallowEqualSelector(
    (state) => state.chat.activeChannel
  ) as any

  const { onSidebarToggle, sidebarCollapsed } = props

  const onTriggerClick = () => {
    const collapsedState = !sidebarCollapsed
    onSidebarToggle(collapsedState)
  }

  const menuTrigger = sidebarCollapsed ? (
    <MenuUnfoldOutlined
      style={{ fontSize: '20px', padding: '22px' }}
      className="trigger"
      onClick={onTriggerClick}
      label="Свернуть"
    />
  ) : (
    <MenuFoldOutlined
      style={{ fontSize: '20px', padding: '22px' }}
      className="trigger"
      onClick={onTriggerClick}
    />
  )

  const activeChannelLabel = activeChannel && (
    <Badge
      count={activeChannel.name}
      style={{
        marginBottom: '6px',
        backgroundColor: '#E7F3FF',
        color: '#000'
      }}
    />
  )

  return (
    <AntHeader className="header background-white">
      {menuTrigger}
      {activeChannelLabel}
      <div className="header-menu">
        <MainMenu />
        <PrivateContainer>
          <UserMenu />
        </PrivateContainer>
      </div>
    </AntHeader>
  )
}

export default Header
