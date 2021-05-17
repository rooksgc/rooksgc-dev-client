import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  changeCreateChannelModalState,
  changeUserProfileModalState,
  changeAddContactModalState,
  changeContactInfoModalState,
  changeChannelInfoModalState
} from './actions'

export interface IModalsState {
  createChannel: boolean
  userProfile: boolean
  addContact: boolean
  contactInfo: boolean
  channelInfo: boolean
}

export const initialState = {
  createChannel: false,
  userProfile: false,
  addContact: false,
  contactInfo: false,
  channelInfo: false
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

const contactInfo = handleActions(
  { [changeContactInfoModalState]: (_state, action) => action.payload },
  false
)

const channelInfo = handleActions(
  { [changeChannelInfoModalState]: (_state, action) => action.payload },
  false
)

const modalsReducer = combineReducers<IModalsState>({
  createChannel,
  userProfile,
  addContact,
  contactInfo,
  channelInfo
})

export { modalsReducer }
