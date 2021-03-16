import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import authService from '../../services/auth'
import { runSaga } from 'redux-saga'
import {
  setTokenFlow,
  logoutUserRequestFlow,
  setTokenWatcher,
  userLogoutWatcher,
  default as mainGenerator
} from './sagas'
import { setToken, fetchUserSuccess, logoutUserRequest } from './actions'

describe('Set jwt token saga', () => {
  const fakeToken = 'e2e23d.23d23d23d.23d32d23'

  it('Should call correct setToken saga tasks', async () => {
    const iterator = setTokenFlow({ payload: fakeToken })
    expect(iterator.next().value).toEqual(
      call([authService, authService.setToken], fakeToken)
    )
    expect(iterator.next().done).toBeTruthy()
  })

  it('Should call saga for saving auth token to localStorage', async () => {
    const setToken = jest.spyOn(authService, 'setToken')
    const dispatched = []

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      setTokenFlow,
      { payload: fakeToken }
    )

    expect(setToken).toHaveBeenCalledTimes(1)
    expect(setToken).toHaveBeenCalledWith(fakeToken)
    setToken.mockRestore()
  })

  it('Should call correct logoutUserRequestFlow saga tasks', async () => {
    const iterator = logoutUserRequestFlow()
    expect(iterator.next().value).toEqual(
      call([authService, authService.removeToken])
    )
    expect(iterator.next().value).toEqual(put(fetchUserSuccess(false)))
    expect(iterator.next().done).toBeTruthy()
  })

  it('Should call saga for removing auth token from localStorage', async () => {
    const removeToken = jest.spyOn(authService, 'removeToken')
    const dispatched = []

    await runSaga(
      {
        dispatch: (action) => dispatched.push(action)
      },
      logoutUserRequestFlow
    )

    expect(removeToken).toHaveBeenCalledTimes(1)
    removeToken.mockRestore()
  })

  it('Test setTokenWatcher saga', async () => {
    const iterator = setTokenWatcher()
    expect(iterator.next().value).toEqual(takeLatest(setToken, setTokenFlow))
    expect(iterator.next().done).toBeTruthy()
  })

  it('Test userLogoutWatcher saga', async () => {
    const iterator = userLogoutWatcher()
    expect(iterator.next().value).toEqual(
      takeLatest(logoutUserRequest, logoutUserRequestFlow)
    )
    expect(iterator.next().done).toBeTruthy()
  })

  it('Test main auth saga generator', async () => {
    const iterator = mainGenerator()
    expect(iterator.next().value).toEqual(
      all([fork(setTokenWatcher), fork(userLogoutWatcher)])
    )
    expect(iterator.next().done).toBeTruthy()
  })
})
