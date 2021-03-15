import { call, put } from 'redux-saga/effects'
import { fetchUserSuccess, fetchUserFailure } from './modules/Auth/actions'
import authService from './services/auth'

/** Сага для инициализации приложения при старте, вызывается 1 раз */
const launchSaga = function* launchSaga() {
  /** Получение объекта пользователя по токену */
  try {
    const token = yield call([authService, authService.getToken])
    if (!token) {
      yield put(fetchUserFailure())
      return
    }
    const { data } = yield call([authService, authService.fetchByToken], {
      token
    })
    if (data) {
      yield put(fetchUserSuccess(data))
    }
  } catch (error) {
    yield put(fetchUserFailure(error))
  }
}

export default launchSaga
