import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import authSagas from './Auth/sagas'
import auth, { IAuthState } from './Auth/reducer'
import chat, { IChatState } from './Chat/reducer'
import launchSaga from './launchSaga'

// Root state interface
export interface RootState {
  auth: IAuthState
  chat: IChatState
}

export const initialState: RootState = {
  auth: { user: null },
  chat: {
    activeChannel: null,
    channels: null,
    contacts: null
  }
}

// Root reducer
export default combineReducers({ auth, chat })

// Root saga
export function* rootSaga() {
  yield fork(authSagas)
  yield fork(launchSaga)
}
