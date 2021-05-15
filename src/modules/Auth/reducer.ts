import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { UserDTO } from 'services/user'
import { userFetchSuccess, userFetchFailure, userUpdatePhoto } from './actions'

export interface IAuthState {
  user: UserDTO
}

export const initialState = {
  user: null
}

const user = handleActions(
  {
    [userFetchSuccess]: (_state, action) => action.payload,
    [userFetchFailure]: () => false,
    [userUpdatePhoto]: (state, action) => ({ ...state, photo: action.payload })
  },
  null
)

const authReducer = combineReducers<IAuthState>({
  user
})

export { authReducer }
