import { typeReducer } from "../../../utilities/constants";
const initState = "a-z";

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.sortListGroup:
			return action.payload;
		default:
			return state;
	}
};
