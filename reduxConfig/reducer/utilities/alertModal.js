import { typeReducer } from "../../../utilities/constants";

const initState = {};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.alertModal:
			return action.payload;
		case typeReducer.closeAlertModal:
			return { ...state, active: false };
		default:
			return state;
	}
};
