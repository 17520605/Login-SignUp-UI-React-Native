import { typeReducer } from "../../../utilities/constants";

const initState = false;

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.addModal:
			return action.payload;
		default:
			return state;
	}
};
