import { typeReducer } from "../../../utilities/constants";

const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.timelineBar:
			return action.payload;
		default:
			return state;
	}
};
