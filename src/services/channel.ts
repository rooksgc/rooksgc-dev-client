import { apiService as api, IServerResponse } from './api'

interface ICreateChannelData {
  name: string
  description?: string
  photo?: string
  ownerId: number
}

interface IPopulateUserChannelsData {
  channels: string
}

const channelService = {
  /** Создать новый канал */
  createChannel: async (
    payload: ICreateChannelData
  ): Promise<IServerResponse> =>
    api.send({
      method: 'put',
      endpoint: '/api/v1/chat/channel',
      payload
    }),

  /** Развернуть информацию о списке каналов пользователя */
  populateUserChannels: async (
    payload: IPopulateUserChannelsData
  ): Promise<IServerResponse> =>
    api.send({
      method: 'post',
      endpoint: `/api/v1/chat/channels`,
      payload
    }),

  /** Получить отформатированный список каналов */
  getUserChannels: async (channelsData: string): Promise<any> => {
    try {
      let userChannelsList
      if (channelsData === '[]') {
        userChannelsList = []
      } else {
        const populatedChannels = await channelService.populateUserChannels({
          channels: channelsData
        })
        userChannelsList = populatedChannels.data
      }

      // todo populate Users
      const userContactsList = []

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

      const data = { channels, contacts }
      return { userChannelsList, userContactsList, data }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }

    return null
  }
}

export { channelService }
