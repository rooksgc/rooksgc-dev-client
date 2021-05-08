import { makeError, SERVER_UNAVAILABLE, AUTH_REJECTION_MESSAGE } from './api'
import authService from './auth'

describe('Auth service', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks(), (localStorage.setItem as any).mockClear()
  })

  test('getToken should return token from localStorage', () => {
    const fakeToken = '123213.2132312.3123'
    localStorage.setItem('auth', fakeToken)

    expect(authService.getToken()).toBe(fakeToken)
    expect(localStorage.setItem).toHaveBeenLastCalledWith('auth', fakeToken)
    expect(localStorage.__STORE__['auth']).toBe(fakeToken)
  })

  test('setToken should set token to localStorage', () => {
    const fakeToken = '123213.2132312.3123'
    authService.setToken(fakeToken)
    expect(authService.getToken()).toBe(fakeToken)

    authService.removeToken()
    expect(authService.getToken()).toBeNull()

    expect(localStorage.removeItem).toHaveBeenCalled()
    expect(localStorage.__STORE__['auth']).not.toBeDefined()
  })

  test('removeToken should delete token from localStorage', () => {
    const fakeToken = '123213.2132312.3123'
    authService.setToken(fakeToken)

    expect(localStorage.setItem).toHaveBeenLastCalledWith('auth', fakeToken)
    expect(localStorage.__STORE__['auth']).toBe(fakeToken)
  })
})

describe('Make Error helper', () => {
  test('Should return concatenated string from error(s) message(s)', () => {
    const commonError = {
      response: {
        data: 'Unauthorized',
        status: 401
      }
    }
    const error500 = {
      response: {
        data: 'Service unavailable',
        status: 500
      }
    }
    const error502 = {
      response: {
        data: 'Service unavailable',
        status: 502
      }
    }
    const expectedError = {
      type: 'error',
      message: SERVER_UNAVAILABLE
    }

    expect(makeError(commonError)).toEqual(commonError.response.data)
    expect(makeError(error500)).toEqual(expectedError)
    expect(makeError(error502)).toEqual(expectedError)
  })

  // todo move to api service test
  test('Should return error if server responded with incorrect token', () => {
    const incorrectTokenError = {
      response: {
        type: 'error',
        data: { message: 'No authorization token was found' }
      }
    }
    const expectedError = {
      type: 'error',
      message: AUTH_REJECTION_MESSAGE
    }

    expect(makeError(incorrectTokenError)).toEqual(expectedError)
  })
})
