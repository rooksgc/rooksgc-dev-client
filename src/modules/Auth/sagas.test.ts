import { takeEvery, fork } from 'redux-saga/effects'
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
import { socketService } from 'services/socket'
import { runSaga } from 'redux-saga'
import { setActiveChannel } from '../Chat/actions'

describe('Auth saga', () => {
  it('authSagas', async () => {
    const generator = authSagas()
    expect(generator.next().value).toEqual(fork(userLoginWatcher))
    expect(generator.next().value).toEqual(fork(userLogoutWatcher))
  })

  it('userLogoutWatcher', async () => {
    const generator = userLogoutWatcher()
    expect(generator.next().value).toEqual(
      takeEvery(userLogoutRequest, userLogoutRequestFlow)
    )
  })

  it('userLoginWatcher', async () => {
    const generator = userLoginWatcher()
    expect(generator.next().value).toEqual(
      takeEvery(userLoginRequest, userLoginRequestFlow)
    )
  })

  it('userLoginRequestFlow', async () => {
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
    const setToken = jest.fn()
    authService.setToken = setToken

    await runSaga(fakeStore, userLoginRequestFlow, {
      payload: { data: fakeUser, token: fakeToken }
    })

    expect(dispatchedActions.length).toBe(1)
    expect(dispatchedActions[0].type).toBe(userFetchSuccess().type)
    expect(setToken).toHaveBeenCalledTimes(1)
    expect(setToken).toHaveBeenCalledWith(fakeToken)
  })

  it('userLogoutRequestFlow', async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const removeToken = jest.fn()
    authService.removeToken = removeToken
    const disconnect = jest.fn()
    socketService.disconnect = disconnect

    await runSaga(fakeStore, userLogoutRequestFlow)

    expect(removeToken).toHaveBeenCalledTimes(1)
    expect(removeToken.mock.results[0].value).not.toBeDefined()
    expect(disconnect).toHaveBeenCalledTimes(1)
    expect(dispatchedActions.length).toBe(2)
    expect(dispatchedActions[0].type).toBe(userFetchSuccess().type)
    expect(dispatchedActions[1].type).toBe(setActiveChannel().type)
  })
})
