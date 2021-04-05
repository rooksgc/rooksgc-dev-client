import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { UserDTO } from '../../services/auth'
import { userFetchSuccess, userFetchFailure } from './actions'

export interface IAuthState {
  user: UserDTO
}

export const initialState = {
  user: null
}

const user = handleActions(
  {
    [userFetchSuccess]: (_state, action) => action.payload,
    [userFetchFailure]: () => false
  },
  null
)

export default combineReducers<IAuthState>({
  user
})
