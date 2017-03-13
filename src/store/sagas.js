import { call } from 'redux-saga/effects';
import routes from '../routes';

export default function * rootSaga() {
	const sagas = routes.routes.map(route => call(route.saga));
	yield sagas;
}
