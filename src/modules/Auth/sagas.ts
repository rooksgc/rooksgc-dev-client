import { takeLatest, takeLeading, put, call, fork } from 'redux-saga/effects'
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  logoutUserRequest,
  setUser,
  setToken
} from './actions'
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
  yield put(setUser(false))
}
function* userLogoutWatcher() {
  yield takeLatest(logoutUserRequest, logoutUserRequestFlow)
}

/** Получение объекта пользователя по токену */
export function* fetchUserByTokenFlow() {
  try {
    const token = yield call([authService, authService.getToken])
    if (!token) {
      yield put(fetchUserFailure())
      return
    }
    const user = yield call([authService, authService.fetchByToken], { token })
    if (user.data) {
      yield put(fetchUserSuccess(user.data))
    }
  } catch (error) {
    yield put(fetchUserFailure(error))
  }
}
function* fetchUserByTokenWatcher() {
  yield takeLeading(fetchUserRequest, fetchUserByTokenFlow)
}

export default function* generator() {
  yield fork(setTokenWatcher)
  yield fork(fetchUserByTokenWatcher)
  yield fork(userLogoutWatcher)
}
