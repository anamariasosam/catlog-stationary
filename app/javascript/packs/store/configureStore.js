import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import defaultState from './defaultState'
import rootReducer from '../reducers'

const configureStore = () => {
  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(thunk),
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore()
