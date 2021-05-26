import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import { UserDTO } from 'services/user'
import {
  userFetchSuccess,
  userFetchFailure,
  userUpdatePhoto,
  userRemoveContact,
  userAddContact
} from './actions'

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
    [userUpdatePhoto]: (state, action) => ({ ...state, photo: action.payload }),
    [userRemoveContact]: (state, action) => {
      if (!state.contacts) {
        return state
      }

      const oldContacts = JSON.parse(state.contacts)

      let updatedContacts = oldContacts.filter(
        (id: number) => action.payload !== id
      )
      if (!updatedContacts.length) {
        updatedContacts = null
      } else {
        updatedContacts = JSON.stringify(updatedContacts)
      }

      return { ...state, contacts: updatedContacts }
    },
    [userAddContact]: (state, action) => {
      let contacts

      if (!state.contacts) {
        contacts = `[${action.payload}]`
      } else {
        const oldContacts = JSON.parse(state.contacts)
        oldContacts.push(action.payload)
        contacts = JSON.stringify(oldContacts)
      }

      return { ...state, contacts }
    }
  },
  null
)

const authReducer = combineReducers<IAuthState>({
  user
})

export { authReducer }
