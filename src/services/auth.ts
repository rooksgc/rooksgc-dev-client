import axios from 'axios'

export interface UserCreateRequestDTO {
  name: string
  email: string
  password: string
}

export interface UserDTO {
  id: number
  name: string
  email: string
  role: string
  is_active: boolean
}

export interface ResponseError {
  error: string
}

const AuthService = {
  create: async (
    payload: UserCreateRequestDTO
  ): Promise<UserDTO | ResponseError> => {
    try {
      const response = await axios.post('/api/v1/user/create', payload)
      return response.data
    } catch (error) {
      return error.response.data
    }
  }
}

export default AuthService
