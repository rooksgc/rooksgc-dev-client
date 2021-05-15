import { io } from 'socket.io-client'
import { chatService } from 'services/chat'
import { UserDTO } from './user'

const WS = {
  socket: undefined,
  connect: async (user: UserDTO) => {
    if (!WS.socket) {
      WS.socket = io('/chat', { autoConnect: false })
      WS.socket.auth = { userId: user.id }
      WS.socket.connect()
    }

    return WS.subscribeToChannels(user)
  },
  subscribeToChannels: async (user: UserDTO) => {
    const { userChannelsList, data } = await chatService.getSubscriptions({
      channelsData: user.channels,
      contactsData: user.contacts
    })
    WS.socket.emit('channels:subscribe', { userChannelsList })
    return data
  },
  subscribeToChannel: async (channelId: number) => {
    WS.socket.emit('channel:subscribe', channelId)
  },
  inviteToChannel: async (userId: number, channelId: number) => {
    WS.socket.emit('channel:invite', { userId, channelId })
  },
  sendChannelMessage: (payload) => {
    WS.socket.emit('channel:message:send', payload)
  },
  sendContactMessage: (payload) => {
    WS.socket.emit('contact:message:send', payload)
  },
  disconnect: () => {
    WS.socket.disconnect()
    WS.socket = undefined
  }
}

export { WS }
