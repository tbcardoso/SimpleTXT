import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import Router from './router/router'

export default class SimpleTXT extends Component {
	render() {
		return (
			<Provider store={createStore()}>
					<Router />
			</Provider>
		);
	}
}
