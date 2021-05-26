import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'
import {
  setActiveChannel,
  initChannelsData,
  initContactsData,
  sendChannelMessage,
  sendContactMessage,
  addChannel,
  addContact,
  populateChannel,
  removeContact
} from './actions'

export interface IActiveChannel {
  id: number
  name: string
  type: string
  isContactRequest?: boolean
  text?: string
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

const addMessage = (state, action) => {
  if (!state) return state

  return {
    ...state,
    [action.payload.activeChannelId]: {
      ...state[action.payload.activeChannelId],
      messages: [
        ...state[action.payload.activeChannelId].messages,
        action.payload.message
      ]
    }
  }
}

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
    }),
    [populateChannel]: (state, action) => ({
      ...state,
      [action.payload.id]: {
        ...state[action.payload.id],
        owner: action.payload.owner,
        members: action.payload.members,
        populated: true
      }
    })
  },
  null
)

const contacts = handleActions(
  {
    [initContactsData]: (_state, action) => action.payload,
    [sendContactMessage]: addMessage,
    [addContact]: (state, action) => {
      const contact = {
        [action.payload.id]: {
          ...action.payload
        }
      }
      delete contact[action.payload.id].id

      return state ? { ...state, ...contact } : { ...contact }
    },
    [removeContact]: (state, action) => {
      let newState = { ...state }
      delete newState[action.payload]
      if (!Object.keys(newState).length) {
        newState = null
      }
      return newState
    }
  },
  null
)

const chatReducer = combineReducers<IChatState>({
  activeChannel,
  channels,
  contacts
})

export { chatReducer }
