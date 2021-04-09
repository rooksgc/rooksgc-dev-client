import { call, put } from 'redux-saga/effects'
import { userFetchSuccess, userFetchFailure } from './Auth/actions'
import authService from '../services/auth'
import WS from '../services/socket'
import { initChannelsData } from './Chat/actions'

/** Launch saga once when on app start */
const launchSaga = function* launchSaga() {
  try {
    const token = yield call([authService, authService.getToken])

    if (!token) {
      yield put(userFetchFailure())
      return
    }
    const { data, message } = yield call(
      [authService, authService.fetchByToken],
      { token }
    )

    if (message === 'TokenExpiredError' || message === 'JsonWebTokenError') {
      yield call([authService, authService.removeToken])
      yield put(userFetchFailure())
    }

    if (data) {
      yield put(userFetchSuccess(data))
      const channelsData = yield call([WS, WS.connect], data)
      yield put(initChannelsData(channelsData))
    }
  } catch (error) {
    yield call([authService, authService.removeToken])
    yield put(userFetchFailure(error))
  }
}

export default launchSaga
