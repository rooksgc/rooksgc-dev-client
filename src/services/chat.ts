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

  /** Получить список каналов и контакток для пользователя
   *  и отформатировать для фронтенда
   */
  getSubscriptions: async ({ channelsData, contactsData }): Promise<any> => {
    try {
      let userChannelsList
      if (!channelsData) {
        userChannelsList = []
      } else {
        const populatedChannels = await api.send({
          method: 'post',
          endpoint: `/api/v1/chat/channels`,
          payload: { channels: channelsData }
        })

        userChannelsList = populatedChannels.data
      }

      let userContactsList
      if (!contactsData) {
        userContactsList = []
      } else {
        const populatedContacts = await api.send({
          method: 'post',
          endpoint: `/api/v1/user/contacts`,
          payload: { contacts: contactsData }
        })

        userContactsList = populatedContacts.data
      }

      const channels = userChannelsList.reduce(
        (acc, { id, ownerId, name, members, photo }) => ({
          ...acc,
          [id]: {
            ownerId,
            name,
            members,
            type: 'channel',
            photo,
            messages: []
          }
        }),
        {}
      )

      const contacts = userContactsList.reduce(
        (acc, { id, name, photo }) => ({
          ...acc,
          [id]: {
            name,
            photo,
            type: 'contact',
            messages: []
          }
        }),
        {}
      )

      const data = { channels, contacts }
      return { userChannelsList, data }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }

    return null
  }
}

export { chatService }
