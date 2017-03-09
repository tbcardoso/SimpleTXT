import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import * as reducers from './reducers'


export default function configureStore() {
  const store = createStore(
    combineReducers({ ...reducers.reducers })
  )

  console.log(store.getState());

  return store;
}
