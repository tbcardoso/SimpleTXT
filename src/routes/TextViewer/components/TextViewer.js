import React from 'react'
import TxtViewContainer from '../containers/TxtViewContainer'

export default class TextViewer extends React.Component {

	static navigationOptions = {
    title: 'SimpleTXT'
  }

	render() {
		return (
			<TxtViewContainer/>
		);
	}
}