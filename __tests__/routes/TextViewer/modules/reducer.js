/* eslint-env jest */
import * as Actions from '../../../../src/routes/TextViewer/modules/actions';
import { selectedFileInitialState, selectedFile } from '../../../../src/routes/TextViewer/modules/reducer';

describe('Reducer selectedFile', () => {
	test('Action selectFileSuccess', () => {
		expect(selectedFile(selectedFileInitialState, Actions.selectFileSuccess('testPath'))).toMatchSnapshot();
	});

	test('Action loadFileSuccess', () => {
		expect(selectedFile(selectedFileInitialState, Actions.loadFileSuccess('testPath', 'Lorem Ipsum...'))).toMatchSnapshot();
	});

	test('Action loadFileError', () => {
		expect(selectedFile(selectedFileInitialState, Actions.loadFileError('testPath', 'Error message.'))).toMatchSnapshot();
	});

	test('Action aboutScreenSelected', () => {
		expect(selectedFile(selectedFileInitialState, Actions.aboutScreenSelected())).toMatchSnapshot();
	});
});
