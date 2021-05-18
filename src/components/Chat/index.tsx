import { useCallback } from 'react'
import { nanoid } from 'nanoid'
import { UserDTO } from 'services/user'
import { Empty } from 'antd'
import { useShallowEqualSelector } from 'hooks/useShallowEqualSelector'
import { sendChannelMessage, sendContactMessage } from 'modules/Chat/actions'
import { useActions } from 'hooks/useActions'
import { socketService } from 'services/socket'
import { Messages } from './Messages'
import { InputMessage } from './InputMessage'

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

  const { type, id } = activeChannel
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
