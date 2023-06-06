import { typeReducer } from "../../../utilities/constants";

const initState = [];

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.thumbnailImage:
			let thumbnailIds = [...state];
			if (!thumbnailIds.includes(action.payload))
				thumbnailIds.push({ id: action.payload[0].id });
			return thumbnailIds;
		case typeReducer.removeThumbnailImage:
			return [];
		default:
			return state;
	}
};
