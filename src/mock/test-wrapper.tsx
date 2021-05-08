import { BrowserRouter } from 'react-router-dom'
import { render as rtlRender } from '@testing-library/react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer, { initialState as rootState } from 'modules'

const store = createStore(rootReducer, rootState)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const render = (ui, { initialState = rootState, ...renderOptions } = {}) => {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    )
  }

  return rtlRender(ui, { wrapper: Wrapper as any, ...renderOptions })
}

export * from '@testing-library/react'
export { render, store }
