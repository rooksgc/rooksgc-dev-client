import { createAction } from 'redux-actions'

/** Записать объект пользователя в стор */
export const setUser: any = createAction('USER/SET_USER')
/** Записать токен пользователя в стор */
export const setToken: any = createAction('USER/SET_TOKEN')
/** Получить объект пользователя по токену */
export const fetchUserRequest: any = createAction('USER/FETCH_REQUEST')
/** Записать объект пользователя в стор */
export const fetchUserSuccess: any = createAction('USER/FETCH_SUCCESS')
/** Ошибка получения объекта пользователя */
export const fetchUserFailure: any = createAction('USER/FETCH_FAILURE')
