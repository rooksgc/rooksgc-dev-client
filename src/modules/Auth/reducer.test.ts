import reducer, { initialState } from './reducer'
import { userFetchSuccess, userFetchFailure } from './actions'

describe('Auth reducer', () => {
  const state0 = reducer(undefined, { type: '' })

  it('Should return initial state', () => {
    expect(state0).toEqual(initialState)
  })

  it('Should contain `user` field', () => {
    expect(Object.keys(state0)).toEqual(expect.arrayContaining(['user']))
  })

  it('userFetchSuccess action set user field to store correctly', () => {
    const fakeUserPayload = {
      id: 1,
      name: 'user0',
      email: 'user0.gmail.com',
      role: 'USER'
    }
    const state1 = reducer(state0, userFetchSuccess(fakeUserPayload))
    expect(state1).toEqual({ user: fakeUserPayload })
  })

  it('userFetchFailure action set user field to false', () => {
    const state1 = reducer(state0, userFetchFailure())
    expect(state1).toEqual({ user: false })
  })
})
