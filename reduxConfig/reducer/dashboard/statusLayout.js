import { typeReducer } from "../../../utilities/constants";

const initState = {
	left: true, // true: open, false: close
	right: false,
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.statusLayout.left:
			return { ...state, left: !state.left };
		case typeReducer.statusLayout.right:
			return { ...state, right: !state.right };
		case typeReducer.statusLayout.custom:
			return action.payload;
		default:
			return state;
	}
};
