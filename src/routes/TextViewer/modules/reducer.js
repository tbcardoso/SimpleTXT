import { combineReducers } from 'redux';
import * as Actions from './actions';


const selectedFileInitialState = {
	filePath: ''
}

function selectedFile(state = selectedFileInitialState, action) {
	switch (action.type) {
    case Actions.SELECT_FILE_SUCCESS:
      return {...state, loadingFilePath: action.filePath};
    case Actions.LOAD_FILE_SUCCESS:
      return {...state, loadingFilePath: '', filePath: action.filePath, fileContent: action.fileContent};
    case Actions.LOAD_FILE_ERROR:
      return {...state, loadingFilePath: '', error: action.error };
    default:
      return state;
  }
}


export default combineReducers({
  selectedFile
});