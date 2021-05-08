import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  setActiveChannel,
  initChannelsData,
  initContactsData,
  sendChannelMessage,
  sendContactMessage,
  addChannel
} from './actions'

export interface IActiveChannel {
  id: number | null
  name: string
  type: string
}

export interface IChatState {
  activeChannel: IActiveChannel
  channels: Object
  contacts: Object
}

export const initialState: IChatState = {
  activeChannel: null,
  channels: null,
  contacts: null
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
    [sendChannelMessage]: addMessage,
    [addChannel]: (state, action) => ({
      ...state,
      [action.payload.id]: {
        ownerId: action.payload.ownerId,
        name: action.payload.name,
        members: action.payload.members,
        photo: action.payload.photo,
        type: action.payload.type,
        messages: []
      }
    })
  },
  null
)

const contacts = handleActions(
  {
    [initContactsData]: (_state, action) => action.payload,
    [sendContactMessage]: addMessage
  },
  null
)

export default combineReducers<IChatState>({
  activeChannel,
  channels,
  contacts
})
