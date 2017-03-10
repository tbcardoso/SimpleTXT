import { call, put, takeLatest } from 'redux-saga/effects'
import { SELECT_FILE_SUCCESS } from './actions'

function* selectedFileSaga(action) {
	console.log('Selected file Saga: ', action);
}

export default function* saga() {
	yield takeLatest(SELECT_FILE_SUCCESS, selectedFileSaga);
}