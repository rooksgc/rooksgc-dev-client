import { FC } from 'react'

interface IMessagesProps {
  data: IChannelData
}

interface IChannelData {
  title: string
  messages: IMessage[]
}

interface IMessage {
  id: string
  text: string
  from: string
}

const Messages: FC<IMessagesProps> = ({
  data: { messages }
}: IMessagesProps) => {
  if (!messages?.length) return <div className="chat-window" />

  return (
    <div className="chat-window">
      {messages.map(({ id, text, from }) => (
        <div key={id}>
          <strong>{from}</strong>: {text}
        </div>
      ))}
    </div>
  )
}

export default Messages
