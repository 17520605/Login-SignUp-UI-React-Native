import { typeReducer } from "../../../utilities/constants";

const initState = {};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.toastModal:
			return action.payload;
		case typeReducer.closeToastModal:
			return { ...state, active: false };
		default:
			return state;
	}
};
