/* eslint-env jest */
import React from 'react';
import 'react-native';
import TextViewer from '../../../../src/routes/TextViewer/components/TextViewer';
import renderer from 'react-test-renderer';

jest.mock('react-native-vector-icons/MaterialIcons', () => ({ ToolbarAndroid: 'ToolbarAndroid' }));

describe('Component TextViewer', () => {
	test('renders correctly', () => {
		const tree = renderer.create(
			<TextViewer filePath=''
				onOpenFile={() => { }}
				onAbout={() => { }} />
		).toJSON();

		expect(tree).toMatchSnapshot();
	});
});
