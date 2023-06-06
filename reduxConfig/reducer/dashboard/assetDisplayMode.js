import { typeReducer, defaultAssetDisplayMode } from "../../../utilities/constants";

let initState = defaultAssetDisplayMode; // default, 0: face mode, 1: has timeline mode, 2: no timeline mode
export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.setAssetDisplayMode:
			return action.payload;
		default:
			return state;
	}
};
