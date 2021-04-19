import { useCallback } from 'react'
import { nanoid } from 'nanoid'
import { UserDTO } from 'src/services/auth'
import { Empty } from 'antd'
import Messages from './Messages'
import InputMessage from './InputMessage'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import {
  addChannelMessage,
  addContactMessage
} from '../../modules/Chat/actions'
import useActions from '../../hooks/useActions'
import WS from '../../services/socket'

const Chat = () => {
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [dispatchAddChannelMessage, dispatchAddContactMessage] = useActions(
    [addChannelMessage, addContactMessage],
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
        dispatchAddChannelMessage(payload)
      }

      if (activeChannel.type === 'contact') {
        dispatchAddContactMessage(payload)
      }

      WS.addMessageToChannel(payload)
    },
    [activeChannel, dispatchAddChannelMessage, dispatchAddContactMessage, user]
  )

  if (!user || !activeChannel || (!channels && !contacts))
    return (
      <div className="chat-empty">
        <Empty description="Выберите канал для начала общения!" />
      </div>
    )

  const { type, id } = activeChannel
  const channelData = type === 'channel' ? channels[id] : contacts[id]

  if (!channelData) return null

  return (
    <>
      <Messages channel={channelData} />
      <InputMessage sendMessage={onSendMessage} />
    </>
  )
}

export default Chat
