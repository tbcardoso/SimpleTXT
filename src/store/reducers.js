import routes from '../routes';

let reducers = {};
routes.routes.map((route) => {
	reducers[route.title] = route.reducer;
});

export { reducers };
