import { typeReducer } from "../../../utilities/constants";

const initState = [
	// default
	"thumbnail", // 10%
	"title", // 20%
	// customizable:

	// 'resolution',
	// 'tags',
	// 'createdDay',
	// 'updatedDay',
	// 'size',
];

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.customCols.add: // add string item
			return [...initState, action.payload];
		case typeReducer.customCols.custom: // add payload as array
			return action.payload;
		default:
			return state;
	}
};
