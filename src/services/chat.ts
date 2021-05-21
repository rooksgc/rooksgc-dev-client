import { apiService as api, IServerResponse } from './api'

export interface ICreateChannelPayload {
  name: string
  description?: string
  photo?: string
  ownerId: number
}

export interface IAddContactRequestPayload {
  from: number
  email: string
}

export interface IRemoveContactPayload {
  userId: number
  contactId: number
}

const chatService = {
  /** Создать канал */
  createChannel: async (
    payload: ICreateChannelPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'put',
      endpoint: '/api/v1/chat/channel',
      payload
    }),

  /** Получить список каналов пользователя с развернутыми данными */
  getChannels: async (channels) => {
    let channelsList = null

    if (channels) {
      const populatedChannels = await api.send({
        method: 'post',
        endpoint: `/api/v1/chat/channels/populate`,
        payload: { channels }
      })

      channelsList = populatedChannels.data.reduce(
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
    }

    return channelsList
  },

  /** Получить список контактов пользователя с развернутыми данными */
  getContacts: async (contacts) => {
    let contactsList = null

    if (contacts) {
      const populatedContacts = await api.send({
        method: 'post',
        endpoint: `/api/v1/chat/contacts/populate`,
        payload: { contacts }
      })

      contactsList = populatedContacts.data.reduce(
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
    }

    return contactsList
  },

  /** Добавить новый контакт */
  addContact: async (
    payload: IAddContactRequestPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/chat/contacts',
      payload
    }),

  /** Удалить контакт */
  removeContact: async (
    payload: IRemoveContactPayload
  ): Promise<IServerResponse> => {
    const { userId, contactId } = payload
    return api.send({
      method: 'delete',
      endpoint: `/api/v1/chat/${userId}/contact/${contactId}`
    })
  }
}

export { chatService }
