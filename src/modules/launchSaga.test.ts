import { fetchUserSuccess, fetchUserFailure } from './Auth/actions'
import authService from '../services/auth'
import launchSaga from './launchSaga'
import { runSaga } from 'redux-saga'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('Launch saga', () => {
  test('Test flow if token not provided', async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const getToken = jest.fn(() => null)
    authService.getToken = getToken

    await runSaga(fakeStore, launchSaga)

    expect(getToken).toHaveBeenCalledTimes(1)
    expect(getToken.mock.results[0].value).toBeNull()
    expect(dispatchedActions.length).toBe(1)
    expect(dispatchedActions[0].type).toBe(fetchUserFailure().type)
  })

  test('Test flow if token is provided', async () => {
    const dispatchedActions = []
    const fakeToken = '1d23d.2vse3d.23d5v'
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const fakeUser = {
      id: 1,
      name: 'user0',
      email: 'user0.gmail.com',
      role: 'USER'
    }
    const getToken = jest.fn(() => fakeToken)
    const fetchByToken = jest.fn(() =>
      Promise.resolve({
        type: 'success',
        data: fakeUser
      })
    )
    authService.getToken = getToken
    authService.fetchByToken = fetchByToken

    await runSaga(fakeStore, launchSaga)

    expect(getToken).toHaveBeenCalledTimes(1)
    expect(getToken.mock.results[0].value).toBe(fakeToken)
    expect(fetchByToken).toHaveBeenCalledTimes(1)
    expect(dispatchedActions[0].type).toBe(fetchUserSuccess().type)
  })

  test('Test flow if token has expired', async () => {
    const dispatchedActions = []
    const expiredToken = '1d23d.2vse3d.23d5v'
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const fakeUser = {
      id: 1,
      name: 'user0',
      email: 'user0.gmail.com',
      role: 'USER'
    }
    const getToken = jest.fn(() => expiredToken)
    const fetchByToken = jest.fn(() =>
      Promise.resolve({
        type: 'error',
        message: 'TokenExpiredError'
      })
    )
    const removeToken = jest.fn()

    authService.getToken = getToken
    authService.fetchByToken = fetchByToken
    authService.removeToken = removeToken

    await runSaga(fakeStore, launchSaga)

    expect(getToken).toHaveBeenCalledTimes(1)
    expect(getToken.mock.results[0].value).toBe(expiredToken)
    expect(fetchByToken).toHaveBeenCalledTimes(1)
    expect(removeToken).toHaveBeenCalledTimes(1)
    expect(dispatchedActions[0].type).toBe(fetchUserFailure().type)
  })

  test('Test flow if throws some error', async () => {
    const dispatchedActions = []
    const fakeToken = '1d23d.2vse3d.23d5v'
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const getToken = jest.fn(() => fakeToken)
    const fetchByToken = jest.fn(() =>
      Promise.reject({
        type: 'error',
        data: 'Some error occured'
      })
    )
    authService.getToken = getToken
    authService.fetchByToken = fetchByToken

    await runSaga(fakeStore, launchSaga)

    expect(getToken).toHaveBeenCalledTimes(1)
    expect(getToken.mock.results[0].value).toBe(fakeToken)
    expect(fetchByToken).toHaveBeenCalledTimes(1)
    expect(dispatchedActions[0].type).toBe(fetchUserFailure().type)
  })
})