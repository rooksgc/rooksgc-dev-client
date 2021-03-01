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
}

export interface UserRecoverPasswordRequestDTO {
  email: string
}

export interface CheckSecretCodeRequestDTO {
  code: string
  secretType: string
}

export interface ChangePasswordRequestDTO {
  code: string
  password: string
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
  /** Регистрация нового пользователя */
  register: async (payload: UserCreateRequestDTO): Promise<ServerResponse> => {
    try {
      const response = await axios.post('/api/v1/auth/register', payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  },

  /** Активация пользователя по коду из письма */
  activate: async (code: string): Promise<ServerResponse> => {
    try {
      const response = await axios.patch(`/api/v1/auth/activate/${code}`)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  },

  /** Вход пользователя в систему и полуение токена */
  login: async (payload: UserLoginRequestDTO): Promise<ServerResponse> => {
    try {
      const response = await axios.post('/api/v1/auth/login', payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  },

  /** Запрос на изменение пароля, отправка письма со ссылкой на email */
  recover: async (
    payload: UserRecoverPasswordRequestDTO
  ): Promise<ServerResponse> => {
    try {
      const response = await axios.post('/api/v1/auth/recover', payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  },

  /** Проверка секретного ключа для доступа к форме восстановления пароля */
  checkSecretcode: async (
    payload: CheckSecretCodeRequestDTO
  ): Promise<ServerResponse> => {
    try {
      const response = await axios.post('/api/v1/auth/check-secret', payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  },

  /** Изменение пароля пользователя */
  changePassword: async (
    payload: ChangePasswordRequestDTO
  ): Promise<ServerResponse> => {
    try {
      const response = await axios.patch(
        '/api/v1/auth/change-password',
        payload
      )
      return response.data
    } catch (error) {
      return makeError(error)
    }
  }
}

export default AuthService
