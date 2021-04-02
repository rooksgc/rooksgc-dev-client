import { useState } from 'react'
import ChatWindow from './ChatWindow'
import ChatInput from './ChatInput'
// import useShallowEqualSelector from '../../hooks/useShallowEqualSelector'

const Chat = () => {
  const [messages, setMessages] = useState([])
  // const activeRoomId = useShallowEqualSelector(
  //   (state) => state.chat.activeRoomId
  // )

  const onSendMessage = (text: string): void => {
    if (!text) return

    setMessages([
      ...messages,
      {
        text
      }
    ])
  }

  return (
    <div className="chat-wrapper">
      <ChatWindow messages={messages} />
      <ChatInput sendMessage={onSendMessage} />
    </div>
  )
}

export default Chat
