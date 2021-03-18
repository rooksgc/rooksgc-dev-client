import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { UserDTO } from '../../services/auth'
import { fetchUserSuccess, fetchUserFailure } from './actions'

export interface AuthState {
  user: UserDTO
}

export const initialState = {
  user: null
}

const user = handleActions(
  {
    [fetchUserSuccess.toString()]: (_state, action) => action.payload,
    [fetchUserFailure]: () => false
  },
  null
)

export default combineReducers<AuthState>({
  user
})
