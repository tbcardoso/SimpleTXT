import { call, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import RNFetchBlob from 'react-native-fetch-blob';
import { ToastAndroid } from 'react-native';
import realm from '../../../realm';

function* loadStartupFileSaga(action) {
	// console.log('loadStartupFileSaga: ', action);
	let files = realm.objects('File');
	// console.log('file.length: ', files.length);
	if (files.length > 0) {
		const file = files[0];
		console.log('file: ', file);
		yield put(Actions.selectFileSuccess(file.path));
	}
}

function* selectedFileSaga(action) {
	console.log('Selected file Saga: ', action);

	try {
		const data = yield call(RNFetchBlob.fs.readFile, action.filePath, 'utf8');
		//console.log('File data: ', data);
		realm.write(() => {
			realm.delete(realm.objects('File'));
			realm.create('File', {path: action.filePath, lastOpened: new Date()});
		});
		yield put(Actions.loadFileSuccess(action.filePath, data));
	} catch (e) {
		console.log('Load File Error: ', e);
		ToastAndroid.show(e.message, ToastAndroid.SHORT);
		realm.write(() => {
			realm.delete(realm.objectForPrimaryKey('File', action.filePath));
		});
		yield put(Actions.loadFileError(action.filePath, e.message));
	}
}

export default function* saga() {
	yield [
		takeLatest(Actions.LOAD_STARTUP_FILE, loadStartupFileSaga),
		takeLatest(Actions.SELECT_FILE_SUCCESS, selectedFileSaga),
	];
}
