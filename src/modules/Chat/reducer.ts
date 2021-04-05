import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  setActiveChannelId,
  initChannelsData,
  addChannelMessage
} from './actions'

export interface IChatState {
  activeChannelId: string
  channels: Object
}

export const initialState = {
  activeChannelId: '',
  channels: {}
}

const activeChannelId = handleActions(
  {
    [setActiveChannelId]: (_state, action) => action.payload
  },
  ''
)

const channels = handleActions(
  {
    [initChannelsData]: (_state, action) => action.payload,
    [addChannelMessage]: (state, action) => ({
      ...state,
      [action.payload.activeChannelId]: {
        ...state[action.payload.activeChannelId],
        messages: [
          ...state[action.payload.activeChannelId].messages,
          action.payload.message
        ]
      }
    })
  },
  null
)

export default combineReducers<IChatState>({
  activeChannelId,
  channels
})
