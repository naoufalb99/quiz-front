import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga'
import userReducer from './user'
import quizReducer from './quiz'

const reducers = combineReducers({
  user: userReducer,
  quiz: quizReducer
})

const configureStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()

  const middlewares = [sagaMiddleware]
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))

  const store = createStore(reducers, initialState, enhancer)
  sagaMiddleware.run(rootSaga)

  return store
}

const store = configureStore()

export { store as default, configureStore }
