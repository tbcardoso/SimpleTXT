import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import rootSaga from './sagas';


export default function configureStore() {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(
		combineReducers({ ...reducers.reducers }),
		applyMiddleware(sagaMiddleware)
	);

	sagaMiddleware.run(rootSaga);

	console.log(store.getState());

	return store;
}
