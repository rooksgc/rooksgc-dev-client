import API, { AUTH_TOKEN_STORAGE_KEY, ServerResponse } from './api'

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

export interface CheckSecretRequestDTO {
  code: string
  secretType: string
}

export interface ChangePasswordRequestDTO {
  code: string
  password: string
}

export interface UserFetchByTokenRequestDTO {
  token: string
}

const AuthService = {
  /** Получить список всех пользователей */
  getAllUsers: async (): Promise<ServerResponse> =>
    API.send({
      method: 'get',
      endpoint: '/api/v1/auth/users'
    }),
  /** Регистрация нового пользователя */
  register: async (payload: UserCreateRequestDTO): Promise<ServerResponse> =>
    API.send({
      method: 'put',
      endpoint: '/api/v1/auth/register',
      payload
    }),

  /** Активация пользователя по коду из письма */
  activate: async (code: string): Promise<ServerResponse> =>
    API.send({
      method: 'patch',
      endpoint: `/api/v1/auth/activate/${code}`
    }),

  /** Вход пользователя в систему и полуение токена */
  login: async (payload: UserLoginRequestDTO): Promise<ServerResponse> =>
    API.send({
      method: 'post',
      endpoint: '/api/v1/auth/login',
      payload
    }),

  /** Попытка получить объект пользователя по токену */
  fetchByToken: async (
    payload: UserFetchByTokenRequestDTO
  ): Promise<ServerResponse> =>
    API.send({
      method: 'post',
      endpoint: '/api/v1/auth/fetch-by-token',
      payload
    }),

  /** Запрос на изменение пароля, отправка письма со ссылкой на email */
  recover: async (
    payload: UserRecoverPasswordRequestDTO
  ): Promise<ServerResponse> =>
    API.send({
      method: 'post',
      endpoint: '/api/v1/auth/recover',
      payload
    }),

  /** Проверка секретного ключа для доступа к форме восстановления пароля */
  checkSecret: async (
    payload: CheckSecretRequestDTO
  ): Promise<ServerResponse> =>
    API.send({
      method: 'post',
      endpoint: '/api/v1/auth/check-secret',
      payload
    }),

  /** Изменение пароля пользователя */
  changePassword: async (
    payload: ChangePasswordRequestDTO
  ): Promise<ServerResponse> =>
    API.send({
      method: 'patch',
      endpoint: '/api/v1/auth/change-password',
      payload
    }),

  getToken: (): string | null => localStorage.getItem(AUTH_TOKEN_STORAGE_KEY),

  setToken: (payload: string): void =>
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, payload),

  removeToken: (): void => localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
}

export default AuthService
