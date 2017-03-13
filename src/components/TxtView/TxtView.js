import { PropTypes } from 'react';
import { requireNativeComponent, View } from 'react-native';

const iface = {
	name: 'TxtView',
	propTypes: {
		fileContent: PropTypes.string.isRequired,
		...View.propTypes
	},
};

module.exports = requireNativeComponent('STTxtView', iface);
