import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { UserDTO } from '../../services/auth'
import {
  setUser,
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure
} from './actions'

export interface AuthState {
  user: UserDTO
}

const user = handleActions(
  {
    [fetchUserRequest]: () => null,
    [fetchUserSuccess]: (_state, action) => action.payload,
    [fetchUserFailure]: () => false,
    [setUser]: (_state, action) => action.payload
  },
  null
)

export default combineReducers<AuthState>({
  user
})
