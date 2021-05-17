import { combineReducers } from 'redux'
import { fork } from 'redux-saga/effects'
import { authSagas } from 'modules/Auth/sagas'
import {
  authReducer,
  IAuthState,
  initialState as authInitialState
} from 'modules/Auth/reducer'
import {
  chatReducer,
  IChatState,
  initialState as chatInitialState
} from 'modules/Chat/reducer'
import {
  modalsReducer,
  IModalsState,
  initialState as modalsInitialState
} from 'modules/Modals/reducer'
import { launchSaga } from 'modules/launchSaga'

export interface IRootState {
  auth: IAuthState
  chat: IChatState
  modals: IModalsState
}

export const initialState: IRootState = {
  auth: authInitialState,
  chat: chatInitialState,
  modals: modalsInitialState
}

export const rootReducer = combineReducers({
  auth: authReducer,
  chat: chatReducer,
  modals: modalsReducer
})

export function* rootSaga() {
  yield fork(authSagas)
  yield fork(launchSaga)
}
