import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import authSagas from './Auth/sagas'
import auth, { AuthState } from './Auth/reducer'
import launchSaga from './launchSaga'

// Root state interface
export interface RootState {
  auth: AuthState
}

export const initialState = {
  auth: { user: null }
}

// Root reducer
export default combineReducers({ auth })

// Root saga
export function* rootSaga() {
  yield fork(authSagas)
  yield fork(launchSaga)
}
