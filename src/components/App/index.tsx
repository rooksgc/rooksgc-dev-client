import { FC, SyntheticEvent, useState } from 'react'
import { Layout, Menu } from 'antd'
import { DesktopOutlined } from '@ant-design/icons'
import Header from '../Header'
import Routes from '../Routes'
import PrivateContainer from '../../containers/Private'

const { Content, Footer, Sider } = Layout

const App: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = (event: SyntheticEvent): void => {
    event.preventDefault()
    setCollapsed(!collapsed)
  }

  return (
    <Layout className="main">
      <Header collapsed={collapsed} onToggle={toggle} />

      <Layout>
        <PrivateContainer>
          <Sider
            className="sider"
            theme="light"
            collapsible
            trigger={null}
            collapsed={collapsed}
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
        </PrivateContainer>

        <Content className="content">
          <Routes />
        </Content>
      </Layout>

      <Footer
        className="footer background-white"
        style={{ textAlign: 'center' }}
      >
        © [Chat]
      </Footer>
    </Layout>
  )
}

export default App
