import { FC } from 'react'
import { Layout, Typography } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import useShallowEqualSelector from 'hooks/useShallowEqualSelector'
import MainMenu from 'components/MainMenu'
import UserMenu from 'components/UserMenu'
import PrivateContainer from 'containers/Private'

const { Text } = Typography

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
    onSidebarToggle(!sidebarCollapsed)
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
    <div className="active-channel">
      <Text className="active-channel-text">{activeChannel.name}</Text>
      {activeChannel.type === 'channel' ? (
        <Text className="active-channel-text" type="secondary">
          5 участников
        </Text>
      ) : (
        <Text className="active-channel-text" type="secondary">
          был(а) 1 час назад
        </Text>
      )}
    </div>
  )

  return (
    <AntHeader className="header background-white">
      <PrivateContainer>
        {menuTrigger}
        {activeChannelLabel}
      </PrivateContainer>

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
