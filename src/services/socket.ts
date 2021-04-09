import { io } from 'socket.io-client'

const WS = {
  socket: undefined,
  connect: async () => {
    // 1 Create new Socket client
    if (!WS.socket) {
      WS.socket = io('/', {
        reconnection: true,
        reconnectionDelay: 500,
        reconnectionAttempts: Infinity
      })
    }

    // 2
    // subscribeto channels
    // WS.socket.emit('channels:subscribe', channelsList)
  },
  disconnect: () => {
    WS.socket.disconnect()
    WS.socket = undefined
  },
  subscribeToChannels: (channelsList: number[]): void => {
    WS.socket.emit('channels:subscribe', channelsList)
  },
  addMessageToChannel: (payload) => {
    WS.socket.emit('channel:message:add', payload)
  }
}

export default WS
