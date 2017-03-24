/* eslint-env jest */
import * as Actions from '../../../../src/routes/TextViewer/modules/actions';

describe('TextViewer Action Creators', () => {
	test('Action Creator loadStartupFile', () => {
		expect(Actions.loadStartupFile()).toMatchSnapshot();
	});

	test('Action Creator selectFileSuccess', () => {
		expect(Actions.selectFileSuccess('test/filepath.txt')).toMatchSnapshot();
	});

	test('Action Creator loadFileSuccess', () => {
		expect(Actions.loadFileSuccess('test/filepath.txt', 'Lorem ipsum...')).toMatchSnapshot();
	});

	test('Action Creator loadFileError', () => {
		expect(Actions.loadFileError('test/filepath.txt', 'Test error message.')).toMatchSnapshot();
	});

	test('Action Creator aboutScreenSelected', () => {
		expect(Actions.aboutScreenSelected()).toMatchSnapshot();
	});
});
