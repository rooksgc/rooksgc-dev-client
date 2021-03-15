import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { UserDTO } from '../../services/auth'
import { setUser, fetchUserSuccess, fetchUserFailure } from './actions'

export interface AuthState {
  user: UserDTO
}

export const initialState = null

const user = handleActions(
  {
    [fetchUserSuccess]: (_state, action) => action.payload,
    [fetchUserFailure]: () => false,
    [setUser]: (_state, action) => action.payload
  },
  initialState
)

export default combineReducers<AuthState>({
  user
})
