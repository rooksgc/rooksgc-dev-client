import { FC } from 'react'
import { Empty } from 'antd'

interface IMessagesProps {
  channel: IChannelData
}

export interface IChannelData {
  id: number | string
  name: string
  type: string // contact(user) | channel
  messages: IMessage[]
}

interface IMessage {
  id: string
  text: string
  from: string | number // todo userId
  type?: string
}

const Messages: FC<IMessagesProps> = ({
  channel: { messages }
}: IMessagesProps) =>
  (!messages?.length && (
    <div className="chat-empty">
      <Empty description="Сообщений нет" />
    </div>
  )) || (
    <div className="chat-window">
      {messages.map(({ id, text, from }) => (
        <div key={id}>
          <strong>{from}</strong>: {text}
        </div>
      ))}
    </div>
  )

export default Messages
