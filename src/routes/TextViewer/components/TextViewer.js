import React from 'react'
import {
	StyleSheet,
	View,
} from 'react-native';
import TxtView from '../../../components/TxtView/TxtView'
import Icon from 'react-native-vector-icons/MaterialIcons'


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

TextViewer.propTypes = {
  filePath: React.PropTypes.string.isRequired,
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