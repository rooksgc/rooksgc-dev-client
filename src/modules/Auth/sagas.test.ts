import { takeLatest, fork } from 'redux-saga/effects'
import {
  userLoginWatcher,
  userLoginRequestFlow,
  userLogoutWatcher,
  userLogoutRequestFlow,
  default as mainGenerator
} from './sagas'
import {
  userFetchSuccess,
  userLoginRequest,
  userLogoutRequest
} from './actions'
import authService from '../../services/auth'
import WS from '../../services/socket'
import { runSaga } from 'redux-saga'
import { setActiveChannel, initChannelsData } from '../Chat/actions'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('Auth saga', () => {
  test('mainGenerator', async () => {
    const generator = mainGenerator()
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

    const fakeToken = '1d23d.2vse3d.23d5v'
    const setToken = jest.fn()
    authService.setToken = setToken

    const connect = jest.fn()
    WS.connect = connect

    await runSaga(fakeStore, userLoginRequestFlow, {
      payload: { data: {}, token: fakeToken }
    })

    expect(dispatchedActions.length).toBe(2)
    expect(dispatchedActions[0].type).toBe(userFetchSuccess().type)
    expect(dispatchedActions[1].type).toBe(initChannelsData().type)

    expect(setToken).toHaveBeenCalledTimes(1)
    expect(setToken).toHaveBeenCalledWith(fakeToken)
    expect(connect).toHaveBeenCalledTimes(1)
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
