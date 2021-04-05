import { io } from 'socket.io-client'

const WS = {
  socket: undefined,
  connect: () => {
    if (!WS.socket) {
      WS.socket = io()
    }
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
