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

  /** Ручное пересоздание соединения в случае дисконнекта с серверной стороны */
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

    socketService.socket.on(
      'channel:message:broadcast',
      ({ activeChannelId, message }) => {
        cb({ activeChannelId, message })
      }
    )
  },

  subscribeToContactMessagePrivate: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('contact:message:private', ({ message, from }) => {
      cb(message, from)
    })
  },

  inviteContactRequest: ({ to, contact }) => {
    socketService.socket.emit('contact:invite:request', { to, contact })
  },

  subscribeToInviteContact: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('contact:invite', (payload) => {
      cb(payload)
    })
  },

  addContactRequest: ({ to, contact }) => {
    socketService.socket.emit('contact:add:request', { to, contact })
  },

  removeInviteRequest: ({ to, contact }) => {
    socketService.socket.emit('invite:remove:request', { to, contact })
  },

  subscribeToRemoveInvite: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('invite:remove', (payload) => {
      cb(payload)
    })
  },

  cancelInviteRequest: ({ to, contact }) => {
    socketService.socket.emit('invite:cancel:request', { to, contact })
  },

  subscribeToCancelInvite: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('invite:cancel', (payload) => {
      cb(payload)
    })
  },

  subscribeToAddContact: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('contact:add', (payload) => {
      cb(payload)
    })
  },

  addToChannelRequest: ({ to, inviterName, channel }) => {
    socketService.socket.emit('channel:adduser:request', {
      to,
      inviterName,
      channel
    })
  },

  subscribeToAddToChannel: (cb) => {
    if (!socketService.socket) return

    socketService.socket.on('channel:adduser', (payload) => {
      cb(payload)
    })
  },

  unsubscribeFromSocketEvents: () => {
    if (!socketService.socket) return

    const events = [
      'channel:message:send',
      'channel:message:broadcast',
      'contact:message:private',
      'contact:message:send',
      'contact:invite:request',
      'contact:invite',
      'contact:add:request',
      'contact:add',
      'invite:remove:request',
      'invite:remove'
    ]

    events.forEach((event) => {
      socketService.socket.off(event)
    })
  }
}

export { socketService }
