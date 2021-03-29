import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import MainMenu from '../MainMenu'
import UserMenu from '../UserMenu'
import PrivateContainer from '../../containers/Private'

const { Header: AntHeader } = Layout

const Header = (props: any) => {
  const { onToggle, collapsed } = props

  return (
    <AntHeader className="header background-white">
      <PrivateContainer>
        {collapsed ? (
          <MenuUnfoldOutlined
            className="trigger collapsed"
            onClick={onToggle}
          />
        ) : (
          <MenuFoldOutlined className="trigger expanded" onClick={onToggle} />
        )}
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
