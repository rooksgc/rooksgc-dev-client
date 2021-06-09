import { call, put } from 'redux-saga/effects'
import { authService } from 'services/auth'
import { userFetchSuccess, userFetchFailure } from './Auth/actions'

/** Launch saga once when on app start */
const launchSaga = function* launchSaga() {
  try {
    const token = yield call([authService, authService.getToken])

    if (!token) {
      yield put(userFetchFailure())
      return
    }
    const { data: user } = yield call([authService, authService.fetchByToken], {
      token
    })

    if (!user) {
      yield call([authService, authService.removeToken])
      yield put(userFetchFailure())
      return
    }

    yield put(userFetchSuccess(user))
  } catch (error) {
    yield call([authService, authService.removeToken])
    yield put(userFetchFailure(error))
  }
}

export { launchSaga }
