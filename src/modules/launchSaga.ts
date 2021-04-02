import { call, put } from 'redux-saga/effects'
import { fetchUserSuccess, fetchUserFailure } from './Auth/actions'
import authService from '../services/auth'
import ws from '../services/socket'

/** Launch saga once when on app start */
const launchSaga = function* launchSaga() {
  try {
    const token = yield call([authService, authService.getToken])

    if (!token) {
      yield put(fetchUserFailure())
      return
    }
    const { data, message } = yield call(
      [authService, authService.fetchByToken],
      { token }
    )

    if (message === 'TokenExpiredError' || message === 'JsonWebTokenError') {
      yield call([authService, authService.removeToken])
      yield put(fetchUserFailure())
    }

    if (data) {
      yield put(fetchUserSuccess(data))
      // todo test
      yield call([ws, ws.connect])
    }
  } catch (error) {
    yield call([authService, authService.removeToken])
    yield put(fetchUserFailure(error))
  }
}

export default launchSaga
