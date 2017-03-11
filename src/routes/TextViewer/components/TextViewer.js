import React from 'react';
import {
	StyleSheet,
	View,
} from 'react-native';
import TxtView from '../../../components/TxtView/TxtView';
import Icon from 'react-native-vector-icons/MaterialIcons';


const sampleText = `
  ____  _                 _     _______  _______ 
 / ___|(_)_ __ ___  _ __ | | __|_   _\\ \\/ /_   _|
 \\___ \\| | '_ ' _ \\| '_ \\| |/ _ \\| |  \\  /  | |  
  ___) | | | | | | | |_) | |  __/| |  /  \\  | |  
 |____/|_|_| |_| |_| .__/|_|\\___||_| /_/\\_\\ |_|  
                   |_|                           
`;


export default class TextViewer extends React.Component {

	_onActionSelected = (position) => {
		switch (position) {
			case 0:
				this.props.onOpenFile();
				break;
		}
	}

	render() {
		const pos = this.props.filePath.lastIndexOf('/');
		const fileName = this.props.filePath.substring(Math.max(0, pos+1));
		const title = fileName || 'SimpleTXT';
		const fileContent = fileName ? this.props.fileContent : sampleText;
		return (
			<View style={{ flex: 1 }}>
				<Icon.ToolbarAndroid
					title={title}
					style={styles.toolbar}
					actions={toolbarActions}
					onActionSelected={this._onActionSelected} />
				<TxtView style={{ flex: 1 }}
					filePath={this.props.filePath} fileContent={fileContent} />
			</View>
		);
	}
}

TextViewer.propTypes = {
  filePath: React.PropTypes.string.isRequired,
	fileContent: React.PropTypes.string,
	onOpenFile: React.PropTypes.func.isRequired,
};


const toolbarActions = [
	{ title: 'Open File', iconName: 'insert-drive-file', iconSize: 30, show: 'always' },
];


const styles = StyleSheet.create({
	toolbar: {
		backgroundColor: '#a9a9a9',
		height: 56,
	},
});