import { combineReducers } from 'redux';
import * as Actions from './actions';
import about from '../../../assets/about';

const selectedFileInitialState = {
	filePath: '',
	fileContent: '',
	loadingFilePath: '',
	error: '',
};

function selectedFile(state = selectedFileInitialState, action) {
	switch (action.type) {
		case Actions.SELECT_FILE_SUCCESS:
			return { ...state, loadingFilePath: action.filePath };
		case Actions.LOAD_FILE_SUCCESS:
			return { ...state, loadingFilePath: '', filePath: action.filePath, fileContent: action.fileContent, error: '' };
		case Actions.LOAD_FILE_ERROR:
			return { ...state, loadingFilePath: '', error: action.error };
		case Actions.ABOUT_SCREEN_SELECTED:
			return { ...state, loadingFilePath: '', filePath: 'About', fileContent: about, error: '' };
		default:
			return state;
	}
}

export default combineReducers({
	selectedFile,
});
