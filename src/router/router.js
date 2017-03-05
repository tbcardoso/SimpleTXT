import { StackNavigator } from 'react-navigation';
import routes from '../routes'

let routeConfigs = {};
routes.routes.map((route)=>{
	routeConfigs[route.title] = {screen: route.component};
});

export default StackNavigator(routeConfigs);
