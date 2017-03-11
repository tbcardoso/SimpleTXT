import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	ScrollView
} from 'react-native';


export default class TxtView extends Component {
	render() {
		return (
			<ScrollView>
				<Text style={styles.txtView} selectable>
					{this.props.fileContent}
				</Text>
			</ScrollView>
		);
	}
}

TxtView.propTypes = {
	fileContent: React.PropTypes.string,
};



const styles = StyleSheet.create({
	txtView: {
		flex: 1,
		fontSize: 10,
		fontFamily: 'monospace',
		textAlign: 'left',
		color: '#333333',
		backgroundColor: '#F5FCFF',
		//marginBottom: 5,
	},
});