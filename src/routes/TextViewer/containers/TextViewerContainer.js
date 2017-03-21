import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TextViewer from '../components/TextViewer';
import { FilePickerManager } from 'NativeModules';
import { selectFileSuccess, loadStartupFile } from '../modules/actions';

class TextViewerContainer extends React.Component {

	static propTypes = {
		filePath: React.PropTypes.string.isRequired,
		fileError: React.PropTypes.string.isRequired,
		loadStartupFile: React.PropTypes.func.isRequired,
	}

	componentDidMount() {
		if (!this.props.filePath && !this.props.fileError) {
			this.props.loadStartupFile();
		}
	}

	render() {
		return <TextViewer {...this.props} />;
	}
}


function onOpenFile(dispatch) {
	FilePickerManager.showFilePicker(null, (response) => {
		//console.log('Response = ', response);

		if (response.didCancel) {
			//console.log('User cancelled file picker');
		} else if (response.error) {
			console.log('FilePickerManager Error: ', response.error);
		} else {
			dispatch(selectFileSuccess(response.path));
		}
	});
}

function mapStateToProps(state) {
	return {
		filePath: state.TextViewer.selectedFile.filePath,
		fileContent: state.TextViewer.selectedFile.fileContent,
		loadingFilePath: state.TextViewer.selectedFile.loadingFilePath,
		fileError: state.TextViewer.selectedFile.error,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onOpenFile: () => {
			onOpenFile(dispatch);
		},
		...bindActionCreators({ loadStartupFile }, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(TextViewerContainer);
