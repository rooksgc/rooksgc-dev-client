import { FC } from 'react'
import { Layout, Badge } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import MainMenu from '../../MainMenu'
import UserMenu from '../../UserMenu'
import PrivateContainer from '../../../containers/Private'

interface IHeaderProps {
  sidebarCollapsed: boolean
  currentChannel: string
  onSidebarToggle: (isCollapsed: boolean) => void
}

const { Header: AntHeader } = Layout

const Header: FC<IHeaderProps> = (props: IHeaderProps) => {
  const { onSidebarToggle, sidebarCollapsed, currentChannel } = props
  const onTriggerClick = () => {
    const collapsedState = !sidebarCollapsed
    onSidebarToggle(collapsedState)
  }

  return (
    <AntHeader className="header background-white">
      {sidebarCollapsed ? (
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
      )}
      {currentChannel && (
        <Badge
          count={currentChannel}
          style={{
            marginBottom: '6px',
            backgroundColor: '#E7F3FF',
            color: '#000'
          }}
        />
      )}
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
