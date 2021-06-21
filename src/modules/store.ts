import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from 'modules'

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(composeWithDevTools(applyMiddleware(sagaMiddleware)))
      : compose(applyMiddleware(sagaMiddleware))

  const store = createStore(rootReducer, enhancer)

  sagaMiddleware.run(rootSaga)
  return store
}

export { createAppStore }
