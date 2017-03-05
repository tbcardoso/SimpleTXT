import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import TextViewerRoute from './routes/TextViewer'

export default class SimpleTXT extends Component {
	render() {
		return (
			<Provider store={createStore()}>
					<TextViewerRoute.component />
			</Provider>
		);
	}
}
