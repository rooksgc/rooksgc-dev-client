import { Layout } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import MainMenu from '../MainMenu'
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
      <MainMenu />
    </AntHeader>
  )
}

export default Header
