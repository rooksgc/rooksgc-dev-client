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

const userService = {
  changePhoto: async (
    payload: ChangePhotoRequestDTO
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/user/photo',
      payload
    }),

  addContact: async (
    payload: IAddContactRequestDTO
  ): Promise<IServerResponse> =>
    api.send({
      method: 'patch',
      endpoint: '/api/v1/user/contacts',
      payload
    })
}

export { userService }
