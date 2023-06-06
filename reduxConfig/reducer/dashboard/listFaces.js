import { typeReducer } from "../../../utilities/constants";

const initState = null;

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.listFaces:
			return action.payload;
		default:
			return state;
	}
};
