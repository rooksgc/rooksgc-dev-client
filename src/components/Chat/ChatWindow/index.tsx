import { FC } from 'react'

interface IMessage {
  text: string
}

interface IChatWindowsProps {
  messages: IMessage[]
}

const ChatWindow: FC<IChatWindowsProps> = ({ messages }) => {
  if (!messages.length)
    return (
      <div className="chat-window">
        <p>Сообщений пока нет</p>
      </div>
    )

  return (
    <div className="chat-window">
      {messages.map((message) => {
        const { text } = message
        return <div>{text}</div>
      })}
    </div>
  )
}

export default ChatWindow
