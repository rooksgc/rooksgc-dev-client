import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  changeCreateChannelModalState,
  changeUserProfileModalState
} from './actions'

export interface IModalsState {
  createChannel: boolean
  userProfile: boolean
}

export const initialState = {
  createChannel: false,
  userProfile: false
}

const createChannel = handleActions(
  { [changeCreateChannelModalState]: (_state, action) => action.payload },
  false
)

const userProfile = handleActions(
  { [changeUserProfileModalState]: (_state, action) => action.payload },
  false
)

const modalsReducer = combineReducers<IModalsState>({
  createChannel,
  userProfile
})

export { modalsReducer }
