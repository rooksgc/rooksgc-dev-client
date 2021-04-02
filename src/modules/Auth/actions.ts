import { createAction } from 'redux-actions'

/** Записать токен пользователя в стор */
export const setToken: any = createAction('AUTH/USER_SET_TOKEN')

/** Записать объект пользователя в стор */
export const fetchUserSuccess: any = createAction('AUTH/USER_FETCH_SUCCESS')

/** Ошибка получения объекта пользователя */
export const fetchUserFailure: any = createAction('AUTH/USER_FETCH_FAILURE')

/** Выход пользователя из системы (logout) */
export const logoutUserRequest: any = createAction('AUTH/USER_LOGOUT_REQUEST')

/** Установить соединение через websocket */
export const connectToWebSocket: any = createAction(
  'AUTH/USER_CONNECT_TO_WEBSOCKET'
)
