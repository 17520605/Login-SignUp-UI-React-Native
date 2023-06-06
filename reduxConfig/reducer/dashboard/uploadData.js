import { typeReducer } from "../../../utilities/constants";

const initState = {
	files: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.uploadData:
			return action.payload;
		default:
			return state;
	}
};
