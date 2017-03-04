import React, { Component } from 'react'
import {
	StyleSheet,
	Text,
	View
} from 'react-native';


const sampleText = `
  ____  _                 _     _______  _______ 
 / ___|(_)_ __ ___  _ __ | | __|_   _\\ \\/ /_   _|
 \\___ \\| | '_ ' _ \\| '_ \\| |/ _ \\| |  \\  /  | |  
  ___) | | | | | | | |_) | |  __/| |  /  \\  | |  
 |____/|_|_| |_| |_| .__/|_|\\___||_| /_/\\_\\ |_|  
                   |_|                           
`;

export default class TxtView extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.txtView}>
					{sampleText}
        </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	txtView: {
		fontSize: 10,
		fontFamily: 'monospace',
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});