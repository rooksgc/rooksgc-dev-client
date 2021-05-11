import { apiService as api, IServerResponse } from './api'

interface ICreateChannelData {
  name: string
  description?: string
  photo?: string
  ownerId: number
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

  /** Редактировать канал */
  // updateChannel: async (payload: any): Promise<ServerResponse> =>
  //   api.send({
  //     method: 'patch',
  //     endpoint: '/api/v1/chat/channel',
  //     payload
  //   }),

  // /** Удалить канал */
  // removeChannel: async (payload: any): Promise<ServerResponse> =>
  //   api.send({
  //     method: 'delete',
  //     endpoint: '/api/v1/chat/channel',
  //     payload
  //   }),

  /** Получить список каналов пользователя */
  fetchUserChannels: async (userId: number): Promise<IServerResponse> =>
    api.send({
      method: 'get',
      endpoint: `/api/v1/chat/channels/${userId}`
    }),

  /** Получить отформатированный список каналов */
  getUserChannels: async (userId: number): Promise<any> => {
    try {
      const userChannelsData = await channelService.fetchUserChannels(userId)
      const userChannelsList = userChannelsData.data

      const userContactsList =
        userId === 1
          ? [
              {
                id: 2,
                name: 'Demo',
                type: 'contact'
              }
            ]
          : [
              {
                id: 1,
                name: 'Rooks',
                type: 'contact'
              }
            ]

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
