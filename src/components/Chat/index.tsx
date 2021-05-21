import { useCallback } from 'react'
import { nanoid } from 'nanoid'
import { UserDTO } from 'services/user'
import { Empty, Alert, Typography } from 'antd'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { sendChannelMessage, sendContactMessage } from 'modules/Chat/actions'
import { useActions } from 'hooks/useActions'
import { socketService } from 'services/socket'
import { Messages } from './Messages'
import { InputMessage } from './InputMessage'

const { Text, Title } = Typography

const Chat = () => {
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [dispatchSendChannelMessage, dispatchSendContactMessage] = useActions(
    [sendChannelMessage, sendContactMessage],
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

  const { id, type, name, isInvite, text } = activeChannel
  const description = `Запрос на добавление в контакты отправлен пользователю ${name}`

  if (isInvite) {
    return (
      <>
        <Alert
          showIcon
          message="Ожидание подтверждения"
          description={description}
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
