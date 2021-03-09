import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from './modules'
import { AUTH_USER_FETCH_REQUEST } from './modules/Auth/actions'

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

  sagaMiddleware.run(rootSaga)

  store.dispatch({ type: AUTH_USER_FETCH_REQUEST })

  return store
}

export default createAppStore
