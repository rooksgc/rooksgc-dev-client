import reducer, { initialState } from './reducer'
import { setToken, fetchUserSuccess, fetchUserFailure } from './actions'

const randomAction = {
  type: `AUTH/RANDOM_ACTION_${parseInt(String(Math.random() * 1000))}`
}

const fakeUserPayload = {
  id: 1,
  name: 'user0',
  email: 'user0.gmail.com',
  role: 'USER'
}

describe('Auth reducer', () => {
  const state0 = reducer(undefined, randomAction)

  it('Should return initial state', () => {
    expect(state0).toEqual(initialState)
  })

  it('Should contain `user` field', () => {
    expect(Object.keys(state0)).toEqual(expect.arrayContaining(['user']))
  })

  it('setToken action do not change to the store', () => {
    const fakeToken = '13d23d21.d2m-d29d3e.2dm203d32'
    const state1 = reducer(state0, setToken(fakeToken))
    expect(state0).toEqual(state1)
  })

  it('fetchUserSuccess action set user field to ste store correctly', () => {
    const state1 = reducer(state0, fetchUserSuccess(fakeUserPayload))
    expect(state1).toEqual({ user: fakeUserPayload })
  })

  it('fetchUserFailure action set user field to false', () => {
    const state1 = reducer(state0, fetchUserFailure())
    expect(state1).toEqual({ user: false })
  })
})
