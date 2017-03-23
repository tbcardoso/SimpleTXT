import React from 'react';
import {
	StyleSheet,
	View,
	ActivityIndicator,
} from 'react-native';
import TxtView from '../../../components/TxtView/TxtView';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class TextViewer extends React.Component {
	_onActionSelected = (position) => {
		switch (position) {
			case 0:
				this.props.onOpenFile();
				break;
		}
	}

	render() {
		return (
			<View style={styles.parent}>
				{this.renderToolbar()}
				{this.renderContent()}
			</View>
		);
	}

	renderToolbar() {
		const pos = this.props.filePath.lastIndexOf('/');
		const fileName = this.props.filePath.substring(Math.max(0, pos + 1));
		const title = fileName || 'SimpleTXT';

		return (
			<Icon.ToolbarAndroid
				title={title}
				titleColor='#ffffff'
				style={styles.toolbar}
				actions={toolbarActions}
				onActionSelected={this._onActionSelected} />
		);
	}

	renderContent() {
		if (this.props.loadingFilePath) {
			return (<ActivityIndicator style={styles.activityIndicator} size="large" color="white" />);
		} else {
			return (<TxtView style={styles.txtView}
				filePath={this.props.filePath} fileContent={this.props.fileContent} />);
		}
	}
}

TextViewer.propTypes = {
	filePath: React.PropTypes.string.isRequired,
	fileContent: React.PropTypes.string,
	loadingFilePath: React.PropTypes.string,
	onOpenFile: React.PropTypes.func.isRequired,
};

const toolbarActions = [
	{ title: 'Open File', iconName: 'insert-drive-file', iconSize: 30, show: 'always' },
];

const styles = StyleSheet.create({
	parent: {
		flex: 1,
	},
	toolbar: {
		backgroundColor: '#607d8b',
		height: 56,
	},
	txtView: {
		flex: 1,
		marginHorizontal: 3,
	},
	activityIndicator: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
		backgroundColor: '#455a64',
		flex: 1,
	}
});
