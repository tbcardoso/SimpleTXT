import { combineReducers } from 'redux'
import { SELECT_FILE_SUCCESS } from './actions'


const selectedFileInitialState = {
	filePath: ''
}

function selectedFile(state = selectedFileInitialState, {type, filePath}) {
	switch (type) {
    case SELECT_FILE_SUCCESS:
      const newState = {...state, filePath};
      return newState;
    default:
      return state;
  }
}


export default combineReducers({
  selectedFile
});