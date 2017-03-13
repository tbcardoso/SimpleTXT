import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import RNFetchBlob from 'react-native-fetch-blob';
import { ToastAndroid } from 'react-native';

function * selectedFileSaga(action) {
	console.log('Selected file Saga: ', action);

	try {
		const data = yield call(RNFetchBlob.fs.readFile, action.filePath, 'utf8');
		//console.log('File data: ', data);
		yield put(Actions.loadFileSuccess(action.filePath, data));
	} catch (e) {
		console.log('Load File Error: ', e);
		ToastAndroid.show(e.message, ToastAndroid.SHORT)
		yield put(Actions.loadFileError(action.filePath, e.message));
	}
}

export default function * saga() {
	yield takeLatest(Actions.SELECT_FILE_SUCCESS, selectedFileSaga);
}
