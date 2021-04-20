import { io } from 'socket.io-client'
import { UserDTO } from './auth'

// TODO: Move to "Chat service"
const chatService = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getUserChannelsData: async (user: UserDTO) => {
    // todo fetch from db
    const userChannelsList = [
      {
        id: 1,
        name: 'Общий чат',
        type: 'channel'
      }
    ]
    const userContactsList = [
      {
        id: 2,
        name: 'Demo',
        type: 'contact'
      }
    ]

    const channels = await userChannelsList.reduce(
      (acc, { id, name, type }) => ({
        ...acc,
        [id]: {
          name,
          type,
          messages: []
        }
      }),
      {}
    )

    const contacts = await userContactsList.reduce(
      (acc, { id, name, type }) => ({
        ...acc,
        [id]: {
          name,
          type,
          messages: []
        }
      }),
      {}
    )

    const userChannelsData = { channels, contacts }

    return { userChannelsList, userContactsList, userChannelsData }
  }
}

const WS = {
  socket: undefined,
  connect: async (user: UserDTO) => {
    if (!WS.socket) {
      WS.socket = io({
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
      userChannelsData
    } = await chatService.getUserChannelsData(user)

    WS.socket.emit('channels:subscribe', { userChannelsList, userContactsList })
    return userChannelsData
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
