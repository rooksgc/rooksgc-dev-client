import { takeLatest, all, fork } from 'redux-saga/effects'
import {
  setTokenWatcher,
  setTokenFlow,
  userLogoutWatcher,
  logoutUserRequestFlow,
  default as mainGenerator
} from './sagas'
import { fetchUserSuccess, logoutUserRequest, setToken } from './actions'
import authService from '../../services/auth'
import { runSaga } from 'redux-saga'

beforeEach(() => {
  jest.resetAllMocks()
})

describe('Auth saga', () => {
  test('mainGenerator', async () => {
    const generator = mainGenerator()
    expect(generator.next().value).toEqual(
      all([fork(setTokenWatcher), fork(userLogoutWatcher)])
    )
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

  test('logoutUserRequestFlow', async () => {
    const dispatchedActions = []
    const fakeStore = {
      dispatch: (action) => dispatchedActions.push(action)
    }
    const removeToken = jest.fn()
    authService.removeToken = removeToken

    await runSaga(fakeStore, logoutUserRequestFlow)

    expect(removeToken).toHaveBeenCalledTimes(1)
    expect(removeToken.mock.results[0].value).not.toBeDefined()
    expect(dispatchedActions.length).toBe(1)
    expect(dispatchedActions[0].type).toBe(fetchUserSuccess().type)
  })
})
