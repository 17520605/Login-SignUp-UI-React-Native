import { typeReducer } from "../../../utilities/constants";

const initState = {
	searchText: "",
	open: false,
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.pickingModal.searchText:
			return {
				...state,
				searchText: action.payload,
			};
		case typeReducer.pickingModal.open:
			return {
				...state,
				open: action.payload,
			};
		default:
			return state;
	}
};
