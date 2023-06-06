import { typeReducer } from "../../../utilities/constants";

const initState = {};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.verifyModal:
			return action.payload;
		case typeReducer.closeVerifyModal:
			return { ...state, active: false };
		default:
			return state;
	}
};
