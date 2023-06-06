import { createStore, compose } from "redux";
import rootReducer from "../reducer/rootReducer";

let store = createStore(
	rootReducer,
	compose(
		window.__REDUX_DEVTOOLS_EXTENSION__
			? window.__REDUX_DEVTOOLS_EXTENSION__({
				trace: true
			})
			: (f) => f
	)
);

export default store;
