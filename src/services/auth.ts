import axios from 'axios'
import { ServerResponse } from '../types/server'

export interface UserLoginRequestDTO {
  email: string
  password: string
}

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

const SERVER_UNAVAILABLE =
  'Сервер не отвечает или временно недоступен. Попробуйте повторить запрос позднее.'

const makeError = (error): ServerResponse => {
  const { response } = error
  if (response.statusText === 'Internal Server Error') {
    return {
      type: 'error',
      message: SERVER_UNAVAILABLE
    }
  }

  return response.data
}

// todo Методы абсолютно одинаковы, следует вынести логику в одно место
const AuthService = {
  create: async (payload: UserCreateRequestDTO): Promise<ServerResponse> => {
    try {
      const response = await axios.post('/api/v1/user/create', payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  },

  activate: async (code: string): Promise<ServerResponse> => {
    try {
      const response = await axios.patch(`/api/v1/user/activate/${code}`)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  },

  login: async (payload: UserLoginRequestDTO): Promise<ServerResponse> => {
    try {
      const response = await axios.post('/api/v1/user/login', payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  }
}

export default AuthService
