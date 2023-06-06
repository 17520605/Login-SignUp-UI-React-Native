import { typeReducer } from "../../../utilities/constants";

const initState = false;

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.openCommentDetail:
			return action.payload;
		default:
			return state;
	}
};
