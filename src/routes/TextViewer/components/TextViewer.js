import React from 'react'
import {
	StyleSheet,
	View,
} from 'react-native';
import TxtView from '../../../components/TxtView/TxtView'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { FilePickerManager } from 'NativeModules';
import { selectFileSuccess } from '../modules/actions'


export default class TextViewer extends React.Component {

	_onActionSelected = (position) => {
		console.log('Position = ', position);
		switch (position) {
			case 0:
				FilePickerManager.showFilePicker(null, (response) => {
					console.log('Response = ', response);

					if (response.didCancel) {
						console.log('User cancelled file picker');
					}
					else if (response.error) {
						console.log('FilePickerManager Error: ', response.error);
					}
					else {
						this.props.dispatch(selectFileSuccess(response.path));
					}
				});
				break;
		}
	}

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Icon.ToolbarAndroid
					title="SimpleTXT"
					style={styles.toolbar}
					actions={toolbarActions}
					onActionSelected={this._onActionSelected} />
				<TxtView style={{ flex: 1 }} filePath={this.props.filePath} />
			</View>
		);
	}
}

const toolbarActions = [
	{ title: 'Open File', iconName: 'insert-drive-file', iconSize: 30, show: 'always' },
];


const styles = StyleSheet.create({
	toolbar: {
		backgroundColor: '#a9a9a9',
		height: 56,
	},
});