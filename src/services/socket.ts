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
    const channels = await chatService.getChannels(user.channels)
    const contacts = await chatService.getContacts(user)

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
  },
  /** Correct reconnection after server emits disconnected event */
  subscribeToDisconnect: (user) => {
    if (!socketService.socket) return

    socketService.socket.on('disconnect', (reason: string) => {
      if (reason === 'transport error' || reason === 'ping timeout') {
        if (!user) return
        socketService.disconnect()
        socketService.connect(user)
      }
    })
  },
  subscribeToChannelMessageBroadcast: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('channel:message:broadcast', () => {
      cb()
    })
  },
  subscribeToContactMessagePrivate: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('contact:message:private', ({ message, from }) => {
      cb(message, from)
    })
  },
  unsubscribeFrom: (socketEvents: string[]) => {
    if (!socketService.socket || !socketEvents.length) return

    socketEvents.forEach((event) => {
      socketService.socket.off(event)
    })
  }
}

export { socketService }
