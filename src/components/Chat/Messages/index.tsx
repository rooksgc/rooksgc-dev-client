import { FC } from 'react'
import { Empty } from 'antd'
import { Scrollbar } from 'containers/Scrollbar'

interface IMessagesProps {
  channel: IChannelData
}

export interface IChannelData {
  id: number | string
  ownerId: number
  name: string
  type: string
  photo: string
  members: string[]
  messages: IMessage[]
}

export interface IContactData {
  name: string
  type: string
  photo: string
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
      <Scrollbar style={{ height: 'calc(100vh - 104px)' }}>
        {messages.map(({ id, text, from }) => (
          <div key={id}>
            <strong>{from}</strong>: {text}
          </div>
        ))}
      </Scrollbar>
    </div>
  )

export { Messages }
