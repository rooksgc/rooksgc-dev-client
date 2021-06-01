import { apiService as api, IServerResponse } from './api'

export interface ICreateChannelPayload {
  name: string
  description?: string
  photo?: string
  ownerId: number
}

export interface IAddContactRequestPayload {
  inviterId: number
  userId: number
}

export interface IRemoveContactPayload {
  userId: number
  contactId: number
}

export interface IInviteToContactsRequestPayload {
  inviterId: number
  inviterName: string
  inviterEmail: string
  inviterContacts: string
  email: string
  text?: string
}

export interface ICancelAddContactPayload {
  inviterId: number
  userId: number
}

export interface IAddToChannelPayload {
  channelId: number
  channelName: string
  email: string
}

export interface ILeaveChannelPayload {
  channelId: number
  userId: number
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

      if (populatedChannels?.data?.length) {
        channelsList = populatedChannels?.data.reduce(
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
      } else {
        channelsList = null
      }
    }

    return channelsList
  },

  /** Получить список контактов пользователя с развернутыми данными */
  getContacts: async (user) => {
    let contactsList = null
    const { id: userId, contacts } = user

    const populatedContacts = await api.send({
      method: 'post',
      endpoint: `/api/v1/chat/contacts/populate`,
      payload: { userId, contacts }
    })

    if (populatedContacts?.data?.length) {
      contactsList = populatedContacts.data.reduce(
        (
          acc,
          { id, name, email, photo, role, isContactRequest, isInvite, text }
        ) => ({
          ...acc,
          [id]: {
            name,
            email,
            photo,
            role,
            isContactRequest,
            isInvite,
            text,
            type: 'contact',
            messages: []
          }
        }),
        {}
      )
    } else {
      contactsList = null
    }

    return contactsList
  },

  /** Добавление нового контакта */
  addContact: async (
    payload: IAddContactRequestPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/chat/contacts',
      payload
    }),

  /** Запрос на добавление в контакты */
  inviteToContacts: async (
    payload: IInviteToContactsRequestPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'put',
      endpoint: '/api/v1/chat/contact/invite',
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
  },

  /** Отмена инвайта */
  removeInvite: async (
    payload: ICancelAddContactPayload
  ): Promise<IServerResponse> => {
    const { inviterId, userId } = payload
    return api.send({
      method: 'delete',
      endpoint: `/api/v1/chat/inviter/${inviterId}/contact/${userId}`
    })
  },

  /** Добавление пользователя в канал */
  addToChannel: async (
    payload: IAddToChannelPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/chat/channel/adduser',
      payload
    }),

  /** Покидание канал пользователем */
  leaveChannel: async (
    payload: ILeaveChannelPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/chat/channel/leave',
      payload
    })
}

export { chatService }
