import { takeLatest, fork } from 'redux-saga/effects'
import {
  setTokenWatcher,
  setTokenFlow,
  userLogoutWatcher,
  logoutUserRequestFlow,
  connectToWebSocketWatcher,
  connectToWebSocketFlow,
  default as mainGenerator
} from './sagas'
import {
  fetchUserSuccess,
  logoutUserRequest,
  setToken,
  connectToWebSocket
} from './actions'
import authService from '../../services/auth'
import ws from '../../services/socket'
import { runSaga } from 'redux-saga'
import { setActiveRoomId } from '../Chat/actions'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('Auth saga', () => {
  test('mainGenerator', async () => {
    const generator = mainGenerator()
    expect(generator.next().value).toEqual(fork(setTokenWatcher))
    expect(generator.next().value).toEqual(fork(connectToWebSocketWatcher))
    expect(generator.next().value).toEqual(fork(userLogoutWatcher))
  })

  test('setTokenWatcher', async () => {
    const generator = setTokenWatcher()
    expect(generator.next().value).toEqual(takeLatest(setToken, setTokenFlow))
  })

  test('userLogoutWatcher', async () => {
    const generator = userLogoutWatcher()
    expect(generator.next().value).toEqual(
      takeLatest(logoutUserRequest, logoutUserRequestFlow)
    )
  })

  test('setTokenFlow', async () => {
    const fakeToken = '1d23d.2vse3d.23d5v'
    const setToken = jest.fn()
    authService.setToken = setToken

    await runSaga({}, setTokenFlow, {
      payload: fakeToken
    })

    expect(setToken).toHaveBeenCalledTimes(1)
    expect(setToken).toHaveBeenCalledWith(fakeToken)
    expect(setToken.mock.results[0].value).not.toBeDefined()
  })

  test('connectToWebSocketWatcher', async () => {
    const generator = connectToWebSocketWatcher()
    expect(generator.next().value).toEqual(
      takeLatest(connectToWebSocket, connectToWebSocketFlow)
    )
  })

  test('connectToWebSocketFlow', async () => {
    const connect = jest.fn()
    ws.connect = connect

    await runSaga({}, connectToWebSocketFlow)

    expect(connect).toHaveBeenCalledTimes(1)
    expect(connect.mock.results[0].value).not.toBeDefined()
  })

  test('logoutUserRequestFlow', async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const removeToken = jest.fn()
    authService.removeToken = removeToken

    const disconnect = jest.fn()
    ws.disconnect = disconnect

    await runSaga(fakeStore, logoutUserRequestFlow)

    expect(removeToken).toHaveBeenCalledTimes(1)
    expect(removeToken.mock.results[0].value).not.toBeDefined()

    expect(disconnect).toHaveBeenCalledTimes(1)

    expect(dispatchedActions.length).toBe(2)
    expect(dispatchedActions[0].type).toBe(fetchUserSuccess().type)
    expect(dispatchedActions[1].type).toBe(setActiveRoomId().type)
  })
})
