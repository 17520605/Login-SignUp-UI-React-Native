import { typeReducer } from "../../../utilities/constants";

const initState = {
	list: [],
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.comments.set:
			return {
				...state,
				list: action.payload,
			};
		case typeReducer.comments.updateContent:
			const { commentId, newContent } = action.payload;

			let cloneState = JSON.parse(JSON.stringify(state));

			let idx = cloneState.list.findIndex((o) => o.id === commentId);
			if (idx > -1) {
				cloneState.list[idx].content = newContent;
			}
			return cloneState;
		default:
			return state;
	}
};
