import { io } from 'socket.io-client'
import { UserDTO } from './auth'

// TODO: Move to "Chat service"
const chatService = {
  getUserChannelsData: async (user: UserDTO) => {
    // Get channels from database for userId = userData.id
    // eslint-disable-next-line no-console
    console.log(user)

    // todo fetch from db
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

    // todo fetch from db
    const userChannelsData = await userChannelsList.reduce(
      (acc, channel) => ({
        ...acc,
        [channel]: {
          title: `channel_${channel}`,
          messages: []
        }
      }),
      {}
    )

    return { userChannelsList, userChannelsData }
  }
}

const WS = {
  socket: undefined,
  connect: async (user: UserDTO) => {
    if (!WS.socket) {
      WS.socket = io()
    }

    WS.socket.on('disconnect', (reason: string) => {
      // eslint-disable-next-line no-console
      console.log(reason)
      // eslint-disable-next-line no-alert
      alert(reason)

      if (reason === 'transport close') {
        // the disconnection was initiated by the server, you need to reconnect manually
        WS.socket.connect()
      }
    })

    return WS.subscribeToChannels(user)
  },
  subscribeToChannels: async (user: UserDTO) => {
    const {
      userChannelsList,
      userChannelsData
    } = await chatService.getUserChannelsData(user)

    WS.socket.emit('channels:subscribe', userChannelsList)
    return userChannelsData
  },
  addMessageToChannel: (payload) => {
    WS.socket.emit('channel:message:add', payload)
  },
  disconnect: () => {
    WS.socket.disconnect()
    WS.socket = undefined
  }
}

export default WS
