import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import * as reducers from './reducers'

console.log("reducers", reducers);
export default function configureStore() {
  const store = createStore(
    combineReducers({ ...reducers.reducers })
  )

  return store
}