import { useCallback } from 'react'
import { nanoid } from 'nanoid'
import { UserDTO } from 'services/user'
import { Empty, Alert, Typography, Button } from 'antd'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import {
  sendChannelMessage,
  sendContactMessage,
  removeContact,
  setActiveChannel,
  addContact
} from 'modules/Chat/actions'
import { userRemoveContact } from 'modules/Auth/actions'
import { useActions } from 'hooks/useActions'
import { socketService } from 'services/socket'
import { notify } from 'services/notification'
import { chatService } from 'services/chat'
import { Messages } from './Messages'
import { InputMessage } from './InputMessage'

const { Text, Title } = Typography

const Chat = () => {
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [
    dispatchSendChannelMessage,
    dispatchSendContactMessage,
    dispatchRemoveContact,
    dispatchUserRemoveContact,
    dispatchActiveChannel,
    dispatchAddContact
  ] = useActions(
    [
      sendChannelMessage,
      sendContactMessage,
      removeContact,
      userRemoveContact,
      setActiveChannel,
      addContact
    ],
    null
  )
  const { activeChannel, channels, contacts } = useShallowEqualSelector(
    (state) => state.chat
  ) as any

  const onSendMessage = useCallback(
    (text: string): void => {
      if (!activeChannel) return
      if (!text) return

      const id = nanoid()
      const { id: userId, name } = user
      const message = { id, text, from: `${name}(${userId})` }
      const payload = {
        activeChannelId: activeChannel.id,
        message
      }

      if (activeChannel.type === 'channel') {
        dispatchSendChannelMessage(payload)
        socketService.sendChannelMessage(payload)
      }

      if (activeChannel.type === 'contact') {
        dispatchSendContactMessage(payload)
        socketService.sendContactMessage({
          from: user.id,
          to: activeChannel.id,
          message
        })
      }
    },
    [
      activeChannel,
      dispatchSendChannelMessage,
      dispatchSendContactMessage,
      user
    ]
  )

  if (!user || !activeChannel || (!channels && !contacts))
    return (
      <div className="chat-empty">
        <Empty description="Выберите канал для начала общения!" />
      </div>
    )

  const { id, type, name, isContactRequest, isInvite, text } = activeChannel

  if (isContactRequest) {
    return (
      <>
        <Alert
          showIcon
          message="Ожидание подтверждения"
          description={`Запрос на добавление в контакты отправлен пользователю ${name}`}
          type="info"
        />
        {text && (
          <div className="invitation-text">
            <Title level={5}>Ваше сообщение пользователю:</Title>
            <Text>
              <blockquote>{text}</blockquote>
            </Text>
          </div>
        )}
      </>
    )
  }

  const removeInviteHandler = async () => {
    try {
      const { type: responseType, message } = await chatService.removeInvite({
        inviterId: activeChannel.id,
        userId: user.id
      })

      if (message) {
        if (responseType === 'success') {
          notify.success(message)
        }
        if (responseType === 'error') {
          notify.error(message)
          return
        }
      }

      dispatchRemoveContact(activeChannel.id)
      dispatchActiveChannel(null)

      socketService.removeInviteRequest({ to: activeChannel.id, contact: user })
    } catch (error) {
      notify.error(error.message)
    }
  }

  const addContactHandler = async () => {
    try {
      const {
        type: responseType,
        message: serverMessage,
        data
      } = await chatService.addContact({
        inviterId: activeChannel.id,
        userId: user.id
      })

      if (serverMessage) {
        if (responseType === 'success') {
          dispatchAddContact({
            ...data,
            type: 'contact',
            messages: []
          })
          dispatchActiveChannel({
            ...data,
            type: 'contact'
          })

          socketService.addContactRequest({
            to: data.id,
            contact: {
              ...user,
              type: 'contact',
              messages: []
            }
          })

          notify.success(serverMessage)
        }

        if (responseType === 'error') {
          // @todo refactor
          if (serverMessage === 'Пользователь отменил свое приглашение') {
            dispatchRemoveContact(activeChannel.id)
            dispatchUserRemoveContact(activeChannel.id)
            dispatchActiveChannel(null)
          }

          notify.error(serverMessage)
        }
      }
    } catch (error) {
      notify.error(error.message)
    }
  }

  if (isInvite) {
    return (
      <>
        <Alert
          showIcon
          message="Запрос на добавление в контакты"
          description={`Пользователь ${name} хочет добавить Вас в свой список контактов`}
          type="info"
        />
        {text && (
          <div className="invitation-text">
            <Title level={5}>Приветственное сообщение:</Title>
            <Text>
              <blockquote>{text}</blockquote>
            </Text>
          </div>
        )}
        <div className="stretch-container">
          <Button block onClick={addContactHandler}>
            Добавить
          </Button>
          <Button block danger onClick={removeInviteHandler}>
            Отказать
          </Button>
        </div>
      </>
    )
  }

  const channelData =
    type === 'channel' ? channels && channels[id] : contacts && contacts[id]

  if (!channelData) return null

  return (
    <>
      <Messages channel={channelData} />
      <InputMessage sendMessage={onSendMessage} />
    </>
  )
}

export { Chat }
