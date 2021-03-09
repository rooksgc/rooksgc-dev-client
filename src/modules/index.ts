import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import authSagas from './Auth/sagas'
import auth, { AuthState } from './Auth/reducer'

export interface RootState {
  auth: AuthState
}

export default combineReducers({ auth })

export function* rootSaga() {
  yield fork(authSagas)
}
