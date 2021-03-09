import { createAction } from 'redux-actions'

export const AUTH_USER_FETCH_REQUEST = 'AUTH/USER_FETCH_REQUEST'

/** Записать объект пользователя в стор */
export const setUser: any = createAction('AUTH/SET_USER')

/** Записать токен пользователя в стор */
export const setToken: any = createAction('AUTH/USER_SET_TOKEN')

/** Выход пользователя из системы (logout) */
export const logoutUserRequest: any = createAction('AUTH/USER_LOGOUT_REQUEST')

/** Получить объект пользователя по токену */
export const fetchUserRequest: any = createAction(AUTH_USER_FETCH_REQUEST)
/** Записать объект пользователя в стор */
export const fetchUserSuccess: any = createAction('AUTH/USER_FETCH_SUCCESS')
/** Ошибка получения объекта пользователя */
export const fetchUserFailure: any = createAction('AUTH/USER_FETCH_FAILURE')
