import { createStore, compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootReducer, { rootSaga } from 'modules'

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(
    rootReducer,
    compose(composeWithDevTools(applyMiddleware(sagaMiddleware)))
  )

  sagaMiddleware.run(rootSaga)
  return store
}

export default createAppStore
