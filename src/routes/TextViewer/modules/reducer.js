import { combineReducers } from 'redux'
import * as Actions from './actions'


const selectedFileInitialState = {
	filePath: ''
}

function selectedFile(state = selectedFileInitialState, action) {
	switch (action.type) {
    case Actions.SELECT_FILE_SUCCESS:
      return {...state, filePath: action.filePath};
    case Actions.LOAD_FILE_SUCCESS:
      return {...state, filePath: action.filePath, fileContent: action.fileContent};
    default:
      return state;
  }
}


export default combineReducers({
  selectedFile
});