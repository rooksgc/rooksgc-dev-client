import { io } from 'socket.io-client'
import channelService from './channel'

const WS = {
  socket: undefined,
  connect: async (userId: number) => {
    if (!WS.socket) {
      WS.socket = io('/chat', {
        autoConnect: false
      })

      WS.socket.auth = { userId }
      WS.socket.connect()
    }

    return WS.subscribeToChannels(userId)
  },
  subscribeToChannels: async (userId: number) => {
    const {
      userChannelsList,
      userContactsList,
      data
    } = await channelService.getUserChannels(userId)

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

export default WS
