import routes from '../routes'

let reducers = {};
routes.routes.map((route)=>{
	reducers[route.reducer.name] = route.reducer;
});

export { reducers };
