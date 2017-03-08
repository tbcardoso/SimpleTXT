import React from 'react'
import {
	StyleSheet,
	View,
} from 'react-native';
import TxtViewContainer from '../containers/TxtViewContainer'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default class TextViewer extends React.Component {

	render() {
		return (
			<View style={{ flex: 1 }}>
				<Icon.ToolbarAndroid
					title="SimpleTXT"
					style={styles.toolbar} />
				<TxtViewContainer style={{ flex: 1 }} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	toolbar: {
		backgroundColor: '#a9a9a9',
		height: 56,
	},
});