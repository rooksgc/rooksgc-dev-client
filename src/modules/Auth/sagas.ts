import { takeLatest, put, call, fork } from 'redux-saga/effects'
import {
  userLoginRequest,
  userLogoutRequest,
  userFetchSuccess
} from './actions'
import { initChannelsData, setActiveChannelId } from '../Chat/actions'
import authService from '../../services/auth'
import WS from '../../services/socket'

/** Успешный вход пользователя */
export function* userLoginRequestFlow({ payload: { data, token } }) {
  yield put(userFetchSuccess(data))
  yield call([authService, authService.setToken], token)
  yield call([WS, WS.connect])

  // todo DRY
  // 1. Get channels list for userId [1, 2, 4, 14]
  const channelsList = [1, 2]
  // 2. Fill Channels with info (messages and metadata)
  const channelsData = channelsList.reduce(
    (acc, channel) => ({
      ...acc,
      [channel]: {
        title: `channel${channel}`,
        messages: []
      }
    }),
    {}
  )
  // 3. Send socket message to obtain channels subscription
  yield call([WS, WS.subscribeToChannels], channelsList)
  // 4. Fill redux state with data
  yield put(initChannelsData(channelsData))
}
export function* userLoginWatcher() {
  yield takeLatest(userLoginRequest, userLoginRequestFlow)
}

/** Выход пользователя из системы (logout) */
export function* userLogoutRequestFlow() {
  yield call([authService, authService.removeToken])
  yield put(userFetchSuccess(false))
  yield put(setActiveChannelId(''))
  yield call([WS, WS.disconnect])
}
export function* userLogoutWatcher() {
  yield takeLatest(userLogoutRequest, userLogoutRequestFlow)
}

export default function* generator() {
  yield fork(userLoginWatcher)
  yield fork(userLogoutWatcher)
}
