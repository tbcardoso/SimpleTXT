import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import Routes from './routes';

export default class SimpleTXT extends Component {
	render() {
		const Route = Routes.routes[0].component;
		return (
			<Provider store={createStore()}>
					<Route />
			</Provider>
		);
	}
}
