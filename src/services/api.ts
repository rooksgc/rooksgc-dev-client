import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IServerResponse {
  type: any
  message?: string
  data?: any
  errors?: string[]
  token?: string
}

interface IServerError {
  response: IErrorResponse
}

interface IErrorResponse {
  data?: any
  status: number
}

/** Сообщение при недоступном соединении */
export const SERVER_UNAVAILABLE =
  'Сервер не отвечает или временно недоступен. Попробуйте повторить запрос позднее.'

/** Ключ, по которому в localStorage хранится токен */
export const AUTH_TOKEN_STORAGE_KEY = 'auth'

/** Отказ в предоставлении ресурса из-за неверного токена */
export const AUTH_REJECTION_MESSAGE =
  'Войдите или зарегистрируйтесь для просмотра данного содержимого.'

export const makeError = (error: IServerError): IServerResponse => {
  const data = error?.response?.data
  const status = error?.response?.status

  if (typeof data === 'string' && (status === 502 || status === 500)) {
    return {
      type: 'error',
      message: SERVER_UNAVAILABLE
    }
  }

  if (data?.message === 'No authorization token was found') {
    return {
      type: 'error',
      message: AUTH_REJECTION_MESSAGE
    }
  }

  return data
}

const apiService = {
  getToken: (): string | null => localStorage.getItem(AUTH_TOKEN_STORAGE_KEY),

  send: async ({
    method,
    endpoint,
    payload = {}
  }): Promise<IServerResponse> => {
    try {
      const response: AxiosResponse = await axios[method](endpoint, payload)
      return response.data
    } catch (error) {
      return makeError(error)
    }
  }
}

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = apiService.getToken()

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

export { apiService }
