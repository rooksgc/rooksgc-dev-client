import { takeLatest, put, call, fork } from 'redux-saga/effects'
import { logoutUserRequest, fetchUserSuccess, setToken } from './actions'
import authService from '../../services/auth'

/** Сохранение token в localStorage */
export function* setTokenFlow({ payload }) {
  yield call([authService, authService.setToken], payload)
}
function* setTokenWatcher() {
  yield takeLatest(setToken, setTokenFlow)
}

/** Выход пользователя из системы (logout) */
export function* logoutUserRequestFlow() {
  yield call([authService, authService.removeToken])
  yield put(fetchUserSuccess(false))
}
function* userLogoutWatcher() {
  yield takeLatest(logoutUserRequest, logoutUserRequestFlow)
}

export default function* generator() {
  yield fork(setTokenWatcher)
  yield fork(userLogoutWatcher)
}
