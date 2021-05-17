import { apiService as api, IServerResponse } from './api'

interface ICreateChannelData {
  name: string
  description?: string
  photo?: string
  ownerId: number
}

const chatService = {
  /** Создать канал */
  createChannel: async (
    payload: ICreateChannelData
  ): Promise<IServerResponse> =>
    api.send({
      method: 'put',
      endpoint: '/api/v1/chat/channel',
      payload
    }),

  /** Получить список каналов пользователя с развернутыми данными */
  getChannelsList: async (channelsData) => {
    let channelsList = []

    if (channelsData) {
      const populatedChannels = await api.send({
        method: 'post',
        endpoint: `/api/v1/chat/channels`,
        payload: { channels: channelsData }
      })

      channelsList = populatedChannels.data
    }

    return channelsList.reduce(
      (acc, { id, ownerId, name, members, photo }) => ({
        ...acc,
        [id]: {
          ownerId,
          name,
          members,
          type: 'channel',
          photo,
          messages: [],
          populated: false
        }
      }),
      {}
    )
  },

  /** Получить список контактов пользователя с развернутыми данными */
  getContactsList: async (contactsData) => {
    let contactsList = []

    if (contactsData) {
      const populatedContacts = await api.send({
        method: 'post',
        endpoint: `/api/v1/user/contacts`,
        payload: { contacts: contactsData }
      })

      contactsList = populatedContacts.data
    }

    return contactsList.reduce(
      (acc, { id, name, email, photo }) => ({
        ...acc,
        [id]: {
          name,
          email,
          photo,
          type: 'contact',
          messages: []
        }
      }),
      {}
    )
  },

  /** Получить список каналов и контактов для пользователя */
  getSubscriptions: async ({ channelsData, contactsData }): Promise<any> => {
    try {
      const channels = await chatService.getChannelsList(channelsData)
      const contacts = await chatService.getContactsList(contactsData)

      return { channels, contacts }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }

    return null
  }
}

export { chatService }
