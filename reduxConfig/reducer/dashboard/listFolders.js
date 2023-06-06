import { typeReducer } from "../../../utilities/constants";

const initState = []; // list folders

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.listFolders:
			return action.payload;
		default:
			return state;
	}
};
