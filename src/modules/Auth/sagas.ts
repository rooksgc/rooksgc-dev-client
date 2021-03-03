import { takeLatest, put, call, fork } from 'redux-saga/effects'
import {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  setToken
} from './actions'
import authService from '../../services/auth'

/** Сохранение token в localStorage */
export function* setTokenFlow({ payload }) {
  yield call([localStorage, localStorage.setItem], 'auth', payload)
}
function* setTokenWatcher() {
  yield takeLatest(setToken, setTokenFlow)
}

/** Получение объекта пользователя по токену */
export function* fetchUserByTokenFlow({ payload }) {
  try {
    const user = yield call([authService, authService.fetchByToken], {
      token: payload
    })
    if (user.data) {
      yield put(fetchUserSuccess(user.data))
    }
  } catch (error) {
    yield put(fetchUserFailure(error))
  }
}
function* fetchUserByTokenWatcher() {
  yield takeLatest(fetchUserRequest, fetchUserByTokenFlow)
}

export default function* generator() {
  yield fork(setTokenWatcher)
  yield fork(fetchUserByTokenWatcher)
}
