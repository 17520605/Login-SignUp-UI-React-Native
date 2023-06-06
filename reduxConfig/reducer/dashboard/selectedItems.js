import { typeReducer } from "../../../utilities/constants";

const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.selectedItems:
			return action.payload;
		default:
			return state;
	}
};
