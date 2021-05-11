import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import { authSagas } from './Auth/sagas'
import { authReducer, IAuthState } from './Auth/reducer'
import { chatReducer, IChatState } from './Chat/reducer'
import { launchSaga } from './launchSaga'

// Root state interface
export interface IRootState {
  auth: IAuthState
  chat: IChatState
}

export const initialState: IRootState = {
  auth: { user: null },
  chat: {
    activeChannel: null,
    channels: null,
    contacts: null
  }
}

// Root reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer
})

// Root saga
export function* rootSaga() {
  yield fork(authSagas)
  yield fork(launchSaga)
}
