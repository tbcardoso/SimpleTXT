import { call, put, takeLatest } from 'redux-saga/effects'
import * as Actions from './actions'

function* selectedFileSaga(action) {
	console.log('Selected file Saga: ', action);

	yield put(Actions.loadFileSuccess(action.filePath, 'Test...'));
}

export default function* saga() {
	yield takeLatest(Actions.SELECT_FILE_SUCCESS, selectedFileSaga);
}