import { typeReducer } from "../../../utilities/constants";

const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.viewportStack:
			return action.payload;
		// case typeReducer.update_viewportStack:
		//     return

		// case typeReducer.add_viewportIDs:
		//     let addedIds = [...state];
		//     if(!addedIds.includes(action.payload)) addedIds.push(action.payload);
		//     return addedIds;
		// case typeReducer.remove_viewportIDs:
		//     let removeIds = [...state];
		//     let indexSplice = removeIds.indexOf(action.payload);
		//     if(indexSplice > -1) removeIds.splice(indexSplice, 1);
		//     return removeIds;
		default:
			return state;
	}
};
