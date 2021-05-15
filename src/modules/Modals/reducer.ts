import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  changeCreateChannelModalState,
  changeUserProfileModalState,
  changeAddContactModalState
} from './actions'

export interface IModalsState {
  createChannel: boolean
  userProfile: boolean
  addContact: boolean
}

export const initialState = {
  createChannel: false,
  userProfile: false,
  addContact: false
}

const createChannel = handleActions(
  { [changeCreateChannelModalState]: (_state, action) => action.payload },
  false
)

const userProfile = handleActions(
  { [changeUserProfileModalState]: (_state, action) => action.payload },
  false
)

const addContact = handleActions(
  { [changeAddContactModalState]: (_state, action) => action.payload },
  false
)

const modalsReducer = combineReducers<IModalsState>({
  createChannel,
  userProfile,
  addContact
})

export { modalsReducer }
