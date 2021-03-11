import { FC, SyntheticEvent, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import Home from '../Home'
import MainMenu from '../MainMenu'
import Chat from '../Chat'
import Login from '../Login'
import Register from '../Register'
import Recover from '../Recover'
import ChangePassword from '../ChangePassword'
import Activation from '../Activation'
import PrivateRoute from '../PrivateRoute'

const { Header, Content, Footer, Sider } = Layout

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = (event: SyntheticEvent): void => {
    event.preventDefault()
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="wrap-layout">
      <Sider
        className="sider"
        theme="light"
        collapsible
        trigger={null}
        collapsed={collapsed}
        data-testid="sider"
      >
        <Menu mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            Комната 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Комната 2
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="main" data-testid="main">
        <Header className="header main-layout__background" data-testid="header">
          {collapsed ? (
            <MenuUnfoldOutlined
              className="trigger collapsed"
              data-testid="trigger"
              onClick={toggle}
            />
          ) : (
            <MenuFoldOutlined
              className="trigger expanded"
              data-testid="trigger"
              onClick={toggle}
            />
          )}
          <MainMenu data-testid="mainmenu" />
        </Header>
        <Content className="content" data-testid="content">
          <Switch>
            <PrivateRoute path="/" exact>
              <Home />
            </PrivateRoute>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register">
              <Register />
            </Route>
            <Route path="/auth/activation/:code">
              <Activation />
            </Route>
            <Route path="/auth/recover">
              <Recover />
            </Route>
            <Route path="/auth/change-password/:code">
              <ChangePassword />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="*">
              <Redirect to="/auth/login" />
            </Route>
          </Switch>
        </Content>
        <Footer
          className="footer"
          data-testid="footer"
          style={{ textAlign: 'center' }}
        >
          © [Chat]
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App
