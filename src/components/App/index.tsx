import React, { FC, useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { DesktopOutlined } from '@ant-design/icons'

import Home from '../Home'
import MainMenu from '../MainMenu'
import Chat from '../Chat'
import Login from '../Login'
import Register from '../Register'
import Recover from '../Recover'
import ChangePassword from '../ChangePassword'

const { Header, Content, Footer, Sider } = Layout

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (isCollapsed: boolean) => {
    setCollapsed(isCollapsed)
  }

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1" icon={<DesktopOutlined />}>
              Комната 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Комната 2
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="header">
            <MainMenu />
          </Header>
          <Content style={{ margin: '0 16px' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/auth/login">
                  <Login />
                </Route>
                <Route path="/auth/register">
                  <Register />
                </Route>
                <Route path="/auth/recover">
                  <Recover />
                </Route>
                <Route path="/auth/change-password">
                  <ChangePassword />
                </Route>
                <Route path="/chat">
                  <Chat />
                </Route>
                <Route path="*">
                  <Redirect to="/auth/login" />
                </Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2021</Footer>
        </Layout>
      </Layout>
    </>
  )
}

export default App
