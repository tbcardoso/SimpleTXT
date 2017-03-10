import { connect } from 'react-redux'
import TextViewer from '../components/TextViewer'
import { FilePickerManager } from 'NativeModules';
import { selectFileSuccess } from '../modules/actions'


function onOpenFile(dispatch) {
	FilePickerManager.showFilePicker(null, (response) => {
		console.log('Response = ', response);

		if (response.didCancel) {
			console.log('User cancelled file picker');
		}
		else if (response.error) {
			console.log('FilePickerManager Error: ', response.error);
		}
		else {
			dispatch(selectFileSuccess(response.path));
		}
	});
}


function mapStateToProps(state) {
	return {
		filePath: state.TextViewer.selectedFile.filePath,
		fileContent: state.TextViewer.selectedFile.fileContent,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onOpenFile: () => {
      onOpenFile(dispatch)
    }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TextViewer);