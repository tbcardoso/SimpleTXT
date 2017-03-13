import TextViewerContainer from './containers/TextViewerContainer';
import reducer from './modules/reducer';
import saga from './modules/saga';

export default {
	title: 'TextViewer',
	component: TextViewerContainer,
	reducer: reducer,
	saga: saga
};
