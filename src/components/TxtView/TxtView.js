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
		const text = this.props.filePath || sampleText;

		return (
			<Text style={styles.txtView}>
				{text}
			</Text>
		);
	}
}

TxtView.propTypes = {
  filePath: React.PropTypes.string.isRequired,
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