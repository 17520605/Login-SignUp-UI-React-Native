import { typeReducer } from "../../../utilities/constants";

const initState = 0; // 0: folder, 1: timeline

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.tabCategories:
			return action.payload;
		default:
			return state;
	}
};
