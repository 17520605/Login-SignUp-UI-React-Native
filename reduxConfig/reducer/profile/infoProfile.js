import { typeReducer } from "../../../utilities/constants";

const initState = null;

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.infoProfile:
			return action.payload;
		case typeReducer.infoProfile_timeFormat:
			return {
				...state,
				yearFormat: action.payload.yearFormat,
				monthFormat: action.payload.monthFormat,
				dayFormat: action.payload.dayFormat,
				dateFormat: action.payload.dateFormat,
			};
		default:
			return state;
	}
};
