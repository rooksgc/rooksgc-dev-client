import { apiService as api, IServerResponse } from './api'

export interface UserDTO {
  id: number
  name: string
  email: string
  photo: string
  role: string
  channels: string
  contacts: string
}

export interface ChangePhotoRequestDTO {
  id: number // userId
  photo: string
}

export interface IAddContactRequestDTO {
  from: number // user.id who adding contact
  email: string
}

interface IUsersListData {
  members: string
}

interface IRemoveContactData {
  userId: number
  contactId: number
}

const userService = {
  /** Изменить или удалить фото пользователя */
  changePhoto: async (
    payload: ChangePhotoRequestDTO
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/user/photo',
      payload
    }),

  /** Добавить новый контакт */
  addContact: async (
    payload: IAddContactRequestDTO
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/user/contacts',
      payload
    }),

  /** Удалить контакт */
  removeContact: async (
    payload: IRemoveContactData
  ): Promise<IServerResponse> => {
    const { userId, contactId } = payload
    return api.send({
      method: 'delete',
      endpoint: `/api/v1/user/${userId}/contact/${contactId}`
    })
  },

  /** Получить информацию о нескольких пользователях */
  getUsersList: async (payload: IUsersListData): Promise<IServerResponse> =>
    api.send({
      method: 'post',
      endpoint: '/api/v1/user/list',
      payload
    })
}

export { userService }
