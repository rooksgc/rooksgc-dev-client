import { takeLatest, fork } from 'redux-saga/effects'
import {
  userLoginWatcher,
  userLoginRequestFlow,
  userLogoutWatcher,
  userLogoutRequestFlow,
  authSagas
} from './sagas'
import {
  userFetchSuccess,
  userLoginRequest,
  userLogoutRequest
} from './actions'
import { authService } from 'services/auth'
import { WS } from 'services/socket'
import { runSaga } from 'redux-saga'
import {
  setActiveChannel,
  initChannelsData,
  initContactsData
} from '../Chat/actions'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('Auth saga', () => {
  test('authSagas', async () => {
    const generator = authSagas()
    expect(generator.next().value).toEqual(fork(userLoginWatcher))
    expect(generator.next().value).toEqual(fork(userLogoutWatcher))
  })

  test('userLogoutWatcher', async () => {
    const generator = userLogoutWatcher()
    expect(generator.next().value).toEqual(
      takeLatest(userLogoutRequest, userLogoutRequestFlow)
    )
  })

  test('userLoginWatcher', async () => {
    const generator = userLoginWatcher()
    expect(generator.next().value).toEqual(
      takeLatest(userLoginRequest, userLoginRequestFlow)
    )
  })

  test('userLoginRequestFlow', async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const fakeUser = {
      id: 1,
      name: 'user0',
      email: 'user0.gmail.com',
      role: 'USER'
    }
    const fakeToken = '1d23d.2vse3d.23d5v'
    const connectResponse = {
      type: 'success',
      data: fakeUser
    }

    const setToken = jest.fn()
    const connect = jest.fn((): any => {
      return connectResponse
    })

    authService.setToken = setToken
    WS.connect = connect

    await runSaga(fakeStore, userLoginRequestFlow, {
      payload: { data: fakeUser, token: fakeToken }
    })

    expect(dispatchedActions.length).toBe(3)
    expect(dispatchedActions[0].type).toBe(userFetchSuccess().type)
    expect(dispatchedActions[1].type).toBe(initChannelsData().type)
    expect(dispatchedActions[2].type).toBe(initContactsData().type)

    expect(setToken).toHaveBeenCalledTimes(1)
    expect(setToken).toHaveBeenCalledWith(fakeToken)
    expect(connect).toHaveBeenCalledTimes(1)
    expect(connect).toHaveBeenCalledWith(fakeUser)
  })

  test('userLogoutRequestFlow', async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const removeToken = jest.fn()
    authService.removeToken = removeToken

    const disconnect = jest.fn()
    WS.disconnect = disconnect

    await runSaga(fakeStore, userLogoutRequestFlow)

    expect(removeToken).toHaveBeenCalledTimes(1)
    expect(removeToken.mock.results[0].value).not.toBeDefined()
    expect(disconnect).toHaveBeenCalledTimes(1)

    expect(dispatchedActions.length).toBe(2)
    expect(dispatchedActions[0].type).toBe(userFetchSuccess().type)
    expect(dispatchedActions[1].type).toBe(setActiveChannel().type)
  })
})
