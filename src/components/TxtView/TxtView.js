import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';


export default class TxtView extends Component {
	render() {
		return (
			<Text style={styles.txtView}>
				{this.props.fileContent}
			</Text>
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