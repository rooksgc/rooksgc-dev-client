// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'jest-localstorage-mock'

delete window.matchMedia
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn()
})

// todo - Dirty hack for avoid async-validator warning while tests running
const { warn } = console
// eslint-disable-next-line no-console
console.warn = (...args: any[]) => {
  if (typeof args[0] === 'string' && args[0].startsWith('async-validator:'))
    return
  warn(...args)
}
