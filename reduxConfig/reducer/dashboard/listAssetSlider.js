import { typeReducer } from '../../../utilities/constants';

const initState = {
	data: [],
	sortedList: [], // only available in timeline mode
	items: {},
	pages: {},
	isGroup: false,
	assets: [],
	oldAsset: {},
	renderAssets: [],
	oldPosition: null
}; // list images

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.listAssetSlider:
			return {
				...state,
				data: action.payload
			}
		case typeReducer.pageAssetSlider:
			return {
				...state,
				assets: action.payload
			}
		case typeReducer.oldAsset:
			return {
				...state,
				oldAsset: action.payload
			}
		case typeReducer.renderAssets:
			return {
				...state,
				renderAssets: action.payload
			}
		case typeReducer.oldPosition:
			return {
				...state,
				renderAssets: action.payload
			}
		default:
			return state;
	}
};
