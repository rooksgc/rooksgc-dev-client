import { io } from 'socket.io-client'
import { channelService } from 'services/channel'
import { UserDTO } from './auth'

const WS = {
  socket: undefined,
  connect: async (user: UserDTO) => {
    if (!WS.socket) {
      WS.socket = io('/chat', {
        autoConnect: false
      })

      WS.socket.auth = { userId: user.id }
      WS.socket.connect()
    }

    return WS.subscribeToChannels(user)
  },
  subscribeToChannels: async (user: UserDTO) => {
    const {
      userChannelsList,
      userContactsList,
      data
    } = await channelService.getUserChannels(user.channels)

    WS.socket.emit('channels:subscribe', { userChannelsList, userContactsList })
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
