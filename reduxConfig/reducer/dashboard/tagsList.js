import { typeReducer } from "../../../utilities/constants";

const initState = {
	data: [],
	items: {},
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.tagsList:
			return action.payload;
		default:
			return state;
	}
};
