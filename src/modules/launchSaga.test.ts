import { userFetchSuccess, userFetchFailure } from './Auth/actions'
import authService from '../services/auth'
import launchSaga from './launchSaga'
import { runSaga } from 'redux-saga'
import WS from '../services/socket'
import { initChannelsData, initContactsData } from './Chat/actions'

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
    expect(dispatchedActions[0].type).toBe(userFetchFailure().type)
  })

  test('Test flow if token can not be fetched (null)', async () => {
    const dispatchedActions = []
    const fakeToken = '1d23d.2vse3d.23d5v'
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }

    const getToken = jest.fn(() => fakeToken)
    const fetchByToken = jest.fn((): any => null)
    const removeToken = jest.fn()

    authService.getToken = getToken
    authService.fetchByToken = fetchByToken
    authService.removeToken = removeToken

    await runSaga(fakeStore, launchSaga)

    expect(getToken).toHaveBeenCalledTimes(1)
    expect(getToken.mock.results[0].value).toBe(fakeToken)
    expect(fetchByToken).toHaveBeenCalledTimes(1)
    expect(fetchByToken).toHaveBeenCalledWith({ token: fakeToken })
    expect(fetchByToken.mock.results[0].value).toBeNull()
    expect(removeToken).toBeCalled()

    expect(dispatchedActions.length).toBe(1)
    expect(dispatchedActions[0].type).toBe(userFetchFailure().type)
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
    const fetchByTokenResponse = {
      type: 'success',
      data: fakeUser
    }
    const connectResponse = {
      type: 'success',
      data: fakeUser
    }

    const getToken = jest.fn(() => fakeToken)
    const fetchByToken = jest.fn((): any => fetchByTokenResponse)
    const connect = jest.fn((): any => {
      return connectResponse
    })

    authService.getToken = getToken
    authService.fetchByToken = fetchByToken
    WS.connect = connect

    await runSaga(fakeStore, launchSaga)

    expect(getToken).toHaveBeenCalledTimes(1)
    expect(getToken.mock.results[0].value).toBe(fakeToken)

    expect(fetchByToken).toHaveBeenCalledTimes(1)
    expect(fetchByToken).toHaveBeenCalledWith({ token: fakeToken })
    expect(fetchByToken.mock.results[0].value).toBe(fetchByTokenResponse)

    expect(connect).toHaveBeenCalledTimes(1)
    expect(connect).toHaveBeenCalledWith(fakeUser)
    expect(connect.mock.results[0].value).toBe(connectResponse)

    expect(dispatchedActions.length).toBe(3)
    expect(dispatchedActions[0].type).toBe(userFetchSuccess().type)
    expect(dispatchedActions[1].type).toBe(initChannelsData().type)
    expect(dispatchedActions[2].type).toBe(initContactsData().type)
  })

  test('Test flow if token wrong or expired', async () => {
    const dispatchedActions = []
    const expiredToken = '1d23d.2vse3d.23d5v'
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
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
    expect(dispatchedActions[0].type).toBe(userFetchFailure().type)
  })
})
