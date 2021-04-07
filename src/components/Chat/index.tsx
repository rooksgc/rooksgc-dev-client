import { useCallback } from 'react'
import { nanoid } from 'nanoid'
import { UserDTO } from 'src/services/auth'
import Messages from './Messages'
import InputMessage from './InputMessage'
import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'
import { addChannelMessage } from '../../modules/Chat/actions'
import useActions from '../../hooks/useActions'
import WS from '../../services/socket'

const Chat = () => {
  const user = useShallowEqualSelector((state) => state.auth.user) as UserDTO
  const [dispatchAddChannelMessage] = useActions([addChannelMessage], null)
  const { activeChannelId, channels } = useShallowEqualSelector(
    (state) => state.chat
  ) as any

  const onSendMessage = useCallback(
    (text: string): void => {
      if (!activeChannelId) return
      if (!text) return

      const id = nanoid()
      const message = { id, text, from: user.name }

      dispatchAddChannelMessage({ activeChannelId, message })
      WS.addMessageToChannel({ activeChannelId, message })
    },
    [activeChannelId, dispatchAddChannelMessage, user.name]
  )

  if (!user || !activeChannelId || !channels) return null

  const channelsData = channels[activeChannelId as string]
  if (!channelsData) return null

  return (
    <>
      <Messages data={channelsData} />
      <InputMessage sendMessage={onSendMessage} />
    </>
  )
}

export default Chat
