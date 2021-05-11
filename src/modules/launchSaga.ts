import { call, put } from 'redux-saga/effects'
import { authService } from 'services/auth'
import { WS } from 'services/socket'
import { userFetchSuccess, userFetchFailure } from './Auth/actions'
import { initChannelsData, initContactsData } from './Chat/actions'

/** Launch saga once when on app start */
const launchSaga = function* launchSaga() {
  try {
    const token = yield call([authService, authService.getToken])

    if (!token) {
      yield put(userFetchFailure())
      return
    }
    const { data } = yield call([authService, authService.fetchByToken], {
      token
    })

    if (!data) {
      yield call([authService, authService.removeToken])
      yield put(userFetchFailure())
      return
    }

    yield put(userFetchSuccess(data))
    const { channels, contacts } = yield call([WS, WS.connect], data.id)
    yield put(initChannelsData(channels))
    yield put(initContactsData(contacts))
  } catch (error) {
    yield call([authService, authService.removeToken])
    yield put(userFetchFailure(error))
  }
}

export { launchSaga }
