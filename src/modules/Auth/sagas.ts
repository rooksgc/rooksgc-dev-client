import { takeLatest, put, call, fork } from 'redux-saga/effects'
import { authService } from 'services/auth'
import { WS } from 'services/socket'
import {
  userLoginRequest,
  userLogoutRequest,
  userFetchSuccess
} from './actions'
import {
  initChannelsData,
  initContactsData,
  setActiveChannel
} from '../Chat/actions'

/** login */
export function* userLoginRequestFlow({ payload: { data, token } }) {
  yield put(userFetchSuccess(data))
  yield call([authService, authService.setToken], token)
  const { channels, contacts } = yield call([WS, WS.connect], data.id)
  yield put(initChannelsData(channels))
  yield put(initContactsData(contacts))
}
export function* userLoginWatcher() {
  yield takeLatest(userLoginRequest, userLoginRequestFlow)
}

/** logout */
export function* userLogoutRequestFlow() {
  yield call([authService, authService.removeToken])
  yield put(userFetchSuccess(false))
  yield put(setActiveChannel(null))
  yield call([WS, WS.disconnect])
}
export function* userLogoutWatcher() {
  yield takeLatest(userLogoutRequest, userLogoutRequestFlow)
}

const authSagas = function* generator() {
  yield fork(userLoginWatcher)
  yield fork(userLogoutWatcher)
}

export { authSagas }
