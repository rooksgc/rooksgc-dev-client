import reducer, { initialState } from './reducer'
import { setUser, setToken } from './actions'

const randomAction = {
  type: `AUTH/RANDOM_ACTION_${parseInt(String(Math.random() * 1000))}`
}

describe('Auth reducer', () => {
  const state0 = reducer(undefined, randomAction)

  it('Should contain `user` field', () => {
    expect(Object.keys(state0)).toEqual(expect.arrayContaining(['user']))
  })

  it('Field `user` should have corrent initial state', () => {
    expect(state0.user).toEqual(initialState)
  })

  it('setUser action should write user object to the store', () => {
    const payload = {
      id: 1,
      name: 'user0',
      email: 'user0.gmail.com',
      role: 'USER'
    }
    const state1 = reducer(state0, setUser(payload))
    expect(state1).toEqual({ user: payload })
  })

  it('setToken action do not change to the store', () => {
    const token = '13d23d21.d2m-d29d3e.2dm203d32'
    const state1 = reducer(state0, setToken(token))
    expect(state0).toEqual(state1)
  })
})
