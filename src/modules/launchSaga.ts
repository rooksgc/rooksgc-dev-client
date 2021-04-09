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
      yield call([WS, WS.connect])

      // 1. Get channels list for userId [1, 2, 4, 14]
      const channelsList = [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18
      ]
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
  } catch (error) {
    yield call([authService, authService.removeToken])
    yield put(userFetchFailure(error))
  }
}

export default launchSaga
