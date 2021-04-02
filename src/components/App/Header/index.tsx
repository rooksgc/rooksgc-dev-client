import { Layout } from 'antd'
import MainMenu from '../../MainMenu'
import UserMenu from '../../UserMenu'
import PrivateContainer from '../../../containers/Private'

const { Header: AntHeader } = Layout

const Header = () => (
  <AntHeader className="header background-white">
    <div className="header-menu">
      <MainMenu />
      <PrivateContainer>
        <UserMenu />
      </PrivateContainer>
    </div>
  </AntHeader>
)

export default Header
