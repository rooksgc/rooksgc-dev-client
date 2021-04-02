import { io } from 'socket.io-client'

const WS = {
  socket: undefined,
  connect: () => {
    if (!WS.socket) {
      WS.socket = io()
    } else {
      // eslint-disable-next-line no-console
      console.log('Socket client allready connected!')
    }
  },
  disconnect: () => {
    WS.socket.disconnect()
    WS.socket = undefined
  }
}

export default WS
