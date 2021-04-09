import { io } from 'socket.io-client'
import { UserDTO } from './auth'

const WS = {
  socket: undefined,
  connect: async (data: UserDTO) => {
    // eslint-disable-next-line no-console
    console.log(data) // user data fetched by token

    // 1 Create new Socket client
    if (!WS.socket) {
      WS.socket = io()
    }

    // 2 Get user channels from database (chat service)
    const userChannelsList = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ]

    // 3 todo get channel messages here
    const channelsData = userChannelsList.reduce(
      (acc, channel) => ({
        ...acc,
        [channel]: {
          title: `channel_${channel}`,
          messages: []
        }
      }),
      {}
    )

    // 4 subscribe to all channels
    WS.subscribeToChannels(userChannelsList)
    return channelsData
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
