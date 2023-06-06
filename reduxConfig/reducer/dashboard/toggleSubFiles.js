import { typeReducer } from "../../../utilities/constants";

const initState = false;

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.toggleSubFiles:
			return !state;
		default:
			return state;
	}
};
