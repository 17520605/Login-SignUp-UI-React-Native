import { typeReducer } from "../../../utilities/constants";

const initState = {
	active: false,
	from: "",
	item: {},
};
export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.customTagModal:
			return action.payload;
		default:
			return state;
	}
};
