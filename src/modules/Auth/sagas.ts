import { takeLatest, put, call, fork } from 'redux-saga/effects'
import {
  logoutUserRequest,
  fetchUserSuccess,
  setToken,
  connectToWebSocket
} from './actions'
import { setActiveRoomId } from '../Chat/actions'
import authService from '../../services/auth'
import ws from '../../services/socket'

/** Сохранение token в localStorage */
export function* setTokenFlow({ payload }) {
  yield call([authService, authService.setToken], payload)
}
export function* setTokenWatcher() {
  yield takeLatest(setToken, setTokenFlow)
}

/** Установка соединения через websocket */
export function* connectToWebSocketFlow() {
  yield call([ws, ws.connect])
}
export function* connectToWebSocketWatcher() {
  yield takeLatest(connectToWebSocket, connectToWebSocketFlow)
}

/** Выход пользователя из системы (logout) */
export function* logoutUserRequestFlow() {
  yield call([authService, authService.removeToken])
  yield put(fetchUserSuccess(false))
  yield put(setActiveRoomId(''))
  yield call([ws, ws.disconnect])
}
export function* userLogoutWatcher() {
  yield takeLatest(logoutUserRequest, logoutUserRequestFlow)
}

export default function* generator() {
  yield fork(setTokenWatcher)
  yield fork(connectToWebSocketWatcher)
  yield fork(userLogoutWatcher)
}
