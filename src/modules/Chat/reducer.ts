import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  setActiveChannel,
  initChannelsData,
  initContactsData,
  addChannelMessage,
  addContactMessage
} from './actions'

export interface IActiveChannel {
  id: string | number | null
  label: string
}

export interface IChatState {
  activeChannel: IActiveChannel
  channels: Object
  contacts: Object
}

export const initialState = {
  activeChannel: null,
  channels: {},
  contacts: {}
}

const activeChannel = handleActions(
  {
    [setActiveChannel]: (_state, action) => action.payload
  },
  null
)

const addMessage = (state, action) => ({
  ...state,
  [action.payload.activeChannelId]: {
    ...state[action.payload.activeChannelId],
    messages: [
      ...state[action.payload.activeChannelId].messages,
      action.payload.message
    ]
  }
})

const channels = handleActions(
  {
    [initChannelsData]: (_state, action) => action.payload,
    [addChannelMessage]: addMessage
  },
  null
)

const contacts = handleActions(
  {
    [initContactsData]: (_state, action) => action.payload,
    [addContactMessage]: addMessage
  },
  null
)

export default combineReducers<IChatState>({
  activeChannel,
  channels,
  contacts
})
