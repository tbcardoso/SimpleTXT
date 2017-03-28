/* eslint-env jest */
// require('react-native-mock/mock');
import * as Actions from '../../../../src/routes/TextViewer/modules/actions';
import * as Sagas from '../../../../src/routes/TextViewer/modules/saga';
// import MockRealm from '../../../../__mocks__/realm';

jest.mock('react-native-fetch-blob');
jest.mock('realm');
// jest.mock('react-native');

describe('TextViewer sagas', () => {
	test('Saga loadStartupFileSaga', () => {
		// const mockRealm = new MockRealm();
		// console.log('mockRealm: ', mockRealm);
		// let files = mockRealm.objects();
		// console.log('files: ', files);
		// console.log('file.length: ', files.length);

		const saga = Sagas.loadStartupFileSaga(Actions.loadStartupFile());
		expect(saga.next().value).toMatchSnapshot();
		expect(saga.next().done).toBe(true);

		// return expectSaga(Sagas.loadStartupFileSaga, Actions.loadStartupFile())
		// 	.put(Actions.selectFileSuccess('path/to/file.txt'))
		// 	.run();
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
