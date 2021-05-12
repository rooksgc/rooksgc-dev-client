import { createAction } from 'redux-actions'

/** Записать токен пользователя в стор */
export const userLoginRequest: any = createAction('AUTH/USER_LOGIN_REQUEST')

/** Выход пользователя из системы (logout) */
export const userLogoutRequest: any = createAction('AUTH/USER_LOGOUT_REQUEST')

/** Записать объект пользователя в стор */
export const userFetchSuccess: any = createAction('AUTH/USER_FETCH_SUCCESS')

/** Ошибка получения объекта пользователя */
export const userFetchFailure: any = createAction('AUTH/USER_FETCH_FAILURE')

/** Обновление объекта пользователя (фото) */
export const userUpdatePhoto: any = createAction('AUTH/USER_UPDATE_PHOTO')
