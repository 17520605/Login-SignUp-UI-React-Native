import { typeReducer, API_ROOT } from "../../../utilities/constants";

const initState = {
	appName: "Image Archive",
	appLogo: API_ROOT + "settings/logo",
	isRefetch: false,
	nameCommunity: null,
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.appInfo_appName:
			return {
				...state,
				appName: action.payload,
			};
		case typeReducer.appInfo_appLogo:
			return {
				...state,
				appLogo: action.payload,
			};
		case typeReducer.appInfo_isRefetch:
			return {
				...state,
				isRefetch: !state.isRefetch,
			};
		case typeReducer.appInfo_nameCommunity:
			return {
				...state,
				nameCommunity: action.payload,
			};
		default:
			return state;
	}
};
