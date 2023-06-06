import { typeReducer } from "../../../utilities/constants";

const initState = {
	active: false,
	title: "",
	content: "",
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.statusNoti:
			return action.payload;
		default:
			return state;
	}
};
