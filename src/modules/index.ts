import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import { authSagas } from 'modules/Auth/sagas'
import { authReducer, IAuthState } from 'modules/Auth/reducer'
import { chatReducer, IChatState } from 'modules/Chat/reducer'
import { modalsReducer, IModalsState } from 'modules/Modals/reducer'
import { launchSaga } from 'modules/launchSaga'

// Root state interface
export interface IRootState {
  auth: IAuthState
  chat: IChatState
  modals: IModalsState
}

export const initialState: IRootState = {
  auth: { user: null },
  chat: {
    activeChannel: null,
    channels: null,
    contacts: null
  },
  modals: {
    createChannel: false,
    userProfile: false,
    addContact: false
  }
}

// Root reducer
export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  modals: modalsReducer
})

// Root saga
export function* rootSaga() {
  yield fork(authSagas)
  yield fork(launchSaga)
}
