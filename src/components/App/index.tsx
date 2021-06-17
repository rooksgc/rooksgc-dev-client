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
  removeContact,
  addChannel,
  removeChannelMember
} from 'modules/Chat/actions'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { useActions } from 'hooks/useActions'
import { socketService } from 'services/socket'
import { notify } from 'services/notification'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Routes } from './Routes'

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
    dispatchRemoveContact,
    dispatchAddChannel,
    dispatchRemoveChannelMember
  ] = useActions(
    [
      sendChannelMessage,
      sendContactMessage,
      initChannelsData,
      initContactsData,
      addContact,
      setActiveChannel,
      removeContact,
      addChannel,
      removeChannelMember
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
        ({ activeChannelId, message }) => {
          dispatchSendChannelMessage({ activeChannelId, message })
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

      socketService.subscribeToAddToChannel((payload) => {
        const { inviterName, channel } = payload
        socketService.subscribeToChannel(channel.id)
        dispatchAddChannel(channel)

        const { id, name, type } = channel
        dispatchActiveChannel({ id, name, type })

        notify.success(
          'Добавление в канал',
          `Пользователь ${inviterName} добавил(а) Вас в канал ${name}`
        )
      })

      socketService.subscribeToChannelMemberLeave(
        ({ channelId, channelName, userId, userName }) => {
          dispatchRemoveChannelMember({ channelId, userId })

          notify.info(
            'Изменение в канале',
            `Пользователь ${userName} покинул(а) канал ${channelName}`
          )
        }
      )
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
