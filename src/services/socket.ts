import { io } from 'socket.io-client'
import { UserDTO } from './auth'

// TODO: Move to "Chat service"
const chatService = {
  getUserChannelsData: async (user: UserDTO) => {
    // Get channels from database for userId = userData.id
    // eslint-disable-next-line no-console
    console.log(user.id)

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
        id: 1,
        name: 'Артемс',
        type: 'contact'
      },
      {
        id: 2,
        name: 'Уварыч',
        type: 'contact'
      },
      {
        id: 3,
        name: 'Кузьмич',
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

      WS.socket.auth = { username: user.name }
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
  addMessageToChannel: (payload) => {
    WS.socket.emit('channel:message:add', payload)
  },
  disconnect: () => {
    WS.socket.disconnect()
    WS.socket = undefined
  }
}

export default WS
