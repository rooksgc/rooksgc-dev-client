import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { setActiveRoomId } from './actions'

export interface IChatState {
  activeRoomId: string
}

export const initialState = {
  activeRoomId: ''
}

const activeRoomId = handleActions(
  {
    [setActiveRoomId]: (_state, action) => action.payload
  },
  ''
)

export default combineReducers<IChatState>({
  activeRoomId
})
