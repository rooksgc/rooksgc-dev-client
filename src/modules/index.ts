import { combineReducers } from 'redux'
import { fork, all } from 'redux-saga/effects'
import authSagas from './Auth/sagas'
import auth, { AuthState } from './Auth/reducer'
import launchSaga from '../launchSaga'

export interface RootState {
  auth: AuthState
}

export default combineReducers({ auth })

export function* rootSaga() {
  yield all([fork(authSagas), fork(launchSaga)])
}
