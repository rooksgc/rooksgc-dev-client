import axios, { AxiosRequestConfig } from 'axios'

export interface ServerResponse {
  type: any
  message?: string
  data?: any
  errors?: string[]
  token?: string
}

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

/** Сообщение при недоступном соединении */
const SERVER_UNAVAILABLE =
  'Сервер не отвечает или временно недоступен. Попробуйте повторить запрос позднее.'

/** Ключ, по которому в localStorage хранится токен */
const AUTH_TOKEN_STORAGE_KEY = 'auth'

/** Отказ в предоставлении ресурса из-за неверного токена */
const AUTH_REJECTION_MESSAGE =
  'Войдите или зарегистрируйтесь для просмотра содержимого.'

const makeError = (error: any): ServerResponse => {
  console.dir(error)

  const { response } = error

  // Приватное содержимое
  if (response.data.message === 'No authorization token was found') {
    return {
      type: 'error',
      message: AUTH_REJECTION_MESSAGE
    }
  }

  // TODO не работает на prod
  if (response.statusText === 'Internal Server Error') {
    return {
      type: 'error',
      message: SERVER_UNAVAILABLE
    }
  }

  return response.data
}

const AuthService = {
  /** Получить список всех пользователей */
  getAllUsers: async (): Promise<ServerResponse> =>
    AuthService.send({
      method: 'get',
      endpoint: '/api/v1/auth/users'
    }),
  /** Регистрация нового пользователя */
  register: async (payload: UserCreateRequestDTO): Promise<ServerResponse> =>
    AuthService.send({
      method: 'put',
      endpoint: '/api/v1/auth/register',
      payload
    }),

  /** Активация пользователя по коду из письма */
  activate: async (code: string): Promise<ServerResponse> =>
    AuthService.send({
      method: 'patch',
      endpoint: `/api/v1/auth/activate/${code}`
    }),

  /** Вход пользователя в систему и полуение токена */
  login: async (payload: UserLoginRequestDTO): Promise<ServerResponse> =>
    AuthService.send({
      method: 'post',
      endpoint: '/api/v1/auth/login',
      payload
    }),

  /** Попытка получить объект пользователя по токену */
  fetchByToken: async (
    payload: UserFetchByTokenRequestDTO
  ): Promise<ServerResponse> =>
    AuthService.send({
      method: 'post',
      endpoint: '/api/v1/auth/fetch-by-token',
      payload
    }),

  /** Запрос на изменение пароля, отправка письма со ссылкой на email */
  recover: async (
    payload: UserRecoverPasswordRequestDTO
  ): Promise<ServerResponse> =>
    AuthService.send({
      method: 'post',
      endpoint: '/api/v1/auth/recover',
      payload
    }),

  /** Проверка секретного ключа для доступа к форме восстановления пароля */
  checkSecret: async (
    payload: CheckSecretRequestDTO
  ): Promise<ServerResponse> =>
    AuthService.send({
      method: 'post',
      endpoint: '/api/v1/auth/check-secret',
      payload
    }),

  /** Изменение пароля пользователя */
  changePassword: async (
    payload: ChangePasswordRequestDTO
  ): Promise<ServerResponse> =>
    AuthService.send({
      method: 'patch',
      endpoint: '/api/v1/auth/change-password',
      payload
    }),

  getToken: (): string | null => localStorage.getItem(AUTH_TOKEN_STORAGE_KEY),

  setToken: (payload: string): void =>
    localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, payload),

  removeToken: (): void => localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY),

  send: async ({ method, endpoint, payload = {} }): Promise<ServerResponse> => {
    try {
      const response = await axios[method](endpoint, payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  }
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = AuthService.getToken()

    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }

    return config
  },
  (error) => makeError(error)
)

export default AuthService
