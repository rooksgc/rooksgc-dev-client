import { FC } from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import Routes from '../Routes'

const { Content } = Layout

const App: FC = () => (
  <Layout className="wrap-layout">
    <Sidebar />
    <Layout className="site-layout">
      <Header />
      <Content className="content">
        <Routes />
      </Content>
    </Layout>
  </Layout>
)

export default App
