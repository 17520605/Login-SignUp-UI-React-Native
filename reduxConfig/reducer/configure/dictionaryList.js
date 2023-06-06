import { typeReducer } from "../../../utilities/constants";

const initState = {
	data: [],
	items: {},
	pages: {},
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.dictionaryList:
			return action.payload;
		default:
			return state;
	}
};
