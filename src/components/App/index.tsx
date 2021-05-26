import { FC, useState, useEffect } from 'react'
import { UserDTO } from 'services/user'
import { Layout } from 'antd'
import { PrivateContainer } from 'containers/Private'
import {
  sendChannelMessage,
  sendContactMessage,
  initChannelsData,
  initContactsData,
  addContact,
  setActiveChannel,
  removeContact
} from 'modules/Chat/actions'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { useActions } from 'hooks/useActions'
import { socketService } from 'services/socket'
import { notify } from 'services/notification'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Routes } from '../Routes'

const { Content } = Layout

const App: FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [
    dispatchSendChannelMessage,
    dispatchSendContactMessage,
    dispatchInitChannelsData,
    dispatchInitContactsData,
    dispatchAddContact,
    dispatchActiveChannel,
    dispatchRemoveContact
  ] = useActions(
    [
      sendChannelMessage,
      sendContactMessage,
      initChannelsData,
      initContactsData,
      addContact,
      setActiveChannel,
      removeContact
    ],
    null
  )

  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO

  const onSidebarToggle = (isCollapsed: boolean) => {
    setSidebarCollapsed(isCollapsed)
  }

  useEffect(() => {
    if (!user) return () => {}

    const subscribeToSocketEvents = async () => {
      await socketService.connect(user)
      const {
        channels: channelsData,
        contacts: contactsData
      } = await socketService.subscribeToChannels(user)

      dispatchInitChannelsData(channelsData)
      dispatchInitContactsData(contactsData)

      socketService.subscribeToDisconnect(user)

      socketService.subscribeToChannelMessageBroadcast(
        ({ activeChannelId: channelId, message }) => {
          dispatchSendChannelMessage({
            activeChannelId: channelId,
            message
          })
        }
      )

      socketService.subscribeToContactMessagePrivate((message, from) => {
        dispatchSendContactMessage({
          activeChannelId: from,
          message
        })
      })

      socketService.subscribeToInviteContact((payload) => {
        dispatchAddContact(payload)
      })

      socketService.subscribeToAddContact((payload) => {
        const { id, name, type } = payload
        dispatchAddContact(payload)
        dispatchActiveChannel({
          id,
          name,
          type
        })
        notify.success(
          'Добавление в контакты',
          `Пользователь ${name} добавил(а) Вас в свой список контактов`
        )
      })

      socketService.subscribeToRemoveInvite((payload) => {
        const { id, name } = payload
        dispatchRemoveContact(id)
        dispatchActiveChannel(null)

        notify.error(
          'Отказ добавления в контакты',
          `Пользователь ${name} не стал(а) добавлять Вас в свой список контактов`
        )
      })

      socketService.subscribeToCancelInvite((payload) => {
        const { id, name } = payload
        dispatchRemoveContact(id)
        dispatchActiveChannel(null)

        notify.error(
          'Отмена добавления в контакты',
          `Пользователь ${name} отменил запрос на добавление в контакты`
        )
      })
    }

    subscribeToSocketEvents()

    return () => {
      socketService.unsubscribeFromSocketEvents()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <Layout className="wrap-layout">
      <PrivateContainer>
        <Sidebar
          sidebarCollapsed={sidebarCollapsed}
          onSidebarToggle={onSidebarToggle}
        />
      </PrivateContainer>

      <Layout className="site-layout">
        <Header
          sidebarCollapsed={sidebarCollapsed}
          onSidebarToggle={onSidebarToggle}
        />
        <Content className="content">
          <Routes />
        </Content>
      </Layout>
    </Layout>
  )
}

export { App }
