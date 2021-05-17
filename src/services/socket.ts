import { io } from 'socket.io-client'
import { chatService } from 'services/chat'
import { UserDTO } from './user'

const socketService = {
  socket: undefined,
  connect: async (user: UserDTO) => {
    if (!socketService.socket) {
      socketService.socket = io('/chat', { autoConnect: false })
      socketService.socket.auth = { userId: user.id }
      socketService.socket.connect()
    }

    return socketService.subscribeToChannels(user)
  },
  subscribeToChannels: async (user: UserDTO) => {
    const { channels, contacts } = await chatService.getSubscriptions({
      channelsData: user.channels,
      contactsData: user.contacts
    })

    if (user.channels) {
      const channelsList = Object.keys(channels)
      socketService.socket.emit('channels:subscribe', channelsList)
    }

    return { channels, contacts }
  },
  subscribeToChannel: async (channelId: number) => {
    socketService.socket.emit('channel:subscribe', channelId)
  },
  inviteToChannel: async (userId: number, channelId: number) => {
    socketService.socket.emit('channel:invite', { userId, channelId })
  },
  sendChannelMessage: (payload) => {
    socketService.socket.emit('channel:message:send', payload)
  },
  sendContactMessage: (payload) => {
    socketService.socket.emit('contact:message:send', payload)
  },
  disconnect: () => {
    socketService.socket.disconnect()
    socketService.socket = undefined
  }
}

export { socketService }
