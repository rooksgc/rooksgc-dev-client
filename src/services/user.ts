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

export interface IChangePhotoRequestPayload {
  id: number
  photo: string
}

export interface IPopulateUsersPayload {
  ids: string
}

const userService = {
  /** Изменить или удалить фото пользователя */
  changePhoto: async (
    payload: IChangePhotoRequestPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/user/photo',
      payload
    }),

  /** Получить информацию о нескольких пользователях */
  populateUsers: async (
    payload: IPopulateUsersPayload
  ): Promise<IServerResponse> =>
    api.send({
      method: 'post',
      endpoint: '/api/v1/users/populate',
      payload
    })
}

export { userService }
