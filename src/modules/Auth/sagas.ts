import { takeEvery, put, call, fork } from 'redux-saga/effects'
import { authService } from 'services/auth'
import { socketService } from 'services/socket'
import {
  userLoginRequest,
  userLogoutRequest,
  userFetchSuccess
} from './actions'
import { setActiveChannel } from '../Chat/actions'

/** login */
export function* userLoginRequestFlow({ payload: { data: user, token } }) {
  yield put(userFetchSuccess(user))
  yield call([authService, authService.setToken], token)
}
export function* userLoginWatcher() {
  yield takeEvery(userLoginRequest, userLoginRequestFlow)
}

/** logout */
export function* userLogoutRequestFlow() {
  yield call([authService, authService.removeToken])
  yield put(userFetchSuccess(false))
  yield put(setActiveChannel(null))
  yield call([socketService, socketService.disconnect])
}
export function* userLogoutWatcher() {
  yield takeEvery(userLogoutRequest, userLogoutRequestFlow)
}

const authSagas = function* generator() {
  yield fork(userLoginWatcher)
  yield fork(userLogoutWatcher)
}

export { authSagas }
