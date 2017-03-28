/* eslint-env jest */
import * as Actions from '../../../../src/routes/TextViewer/modules/actions';
import * as Sagas from '../../../../src/routes/TextViewer/modules/saga';

jest.mock('react-native-fetch-blob');
jest.mock('realm');

describe('TextViewer sagas', () => {
	test('Saga loadStartupFileSaga', () => {
		const saga = Sagas.loadStartupFileSaga(Actions.loadStartupFile());
		expect(saga.next().value).toMatchSnapshot();
		expect(saga.next().done).toBe(true);
	});

	test('Saga selectedFileSaga', () => {
		const saga = Sagas.selectedFileSaga(Actions.selectFileSuccess('path/to/file.txt'));
		expect(saga.next().value).toMatchSnapshot();
		expect(saga.next('Lorem ipsum...').value).toMatchSnapshot();
		expect(saga.next().done).toBe(true);
	});

	test('Saga selectedFileSaga exception', () => {
		const saga = Sagas.selectedFileSaga(Actions.selectFileSuccess('path/to/file.txt'));
		expect(saga.next().value).toMatchSnapshot();
		expect(saga.throw({ message: 'Error' })).toMatchSnapshot();
		expect(saga.next().done).toBe(true);
	});
});
