import { typeReducer } from "../../../utilities/constants";

const initState = {
	active: false,
	text: "",
	go: false,
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.searchConfig:
			return action.payload;
		default:
			return state;
	}
};
