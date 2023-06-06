import { typeReducer } from "../../../utilities/constants";

const initState = {
	active: false,
	count: 0,
	totalCount: 0,
	status: null, // finished or processing or creating_folder
	totalSize: 0,
	remainTime: null,
	// location: null, // categoryId parent
	list: [
		// {
		//     name: 'test',
		//     received: 0,
		//     total: 100,
		//     status: '', // error or success or processing
		//     message: '',
		//     type: null, // image, audio, video
		//     location: null, // categoryId,
		// },
	],
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.uploadProgress:
			return action.payload;
		case typeReducer.uploadProgress_reset:
			global.variables.uploadData.files = [];
			global.variables.uploadData.totalCount = 0;
			global.variables.uploadData.totalSize = 0;
			return {
				active: false,
				count: 0,
				totalCount: 0,
				status: null, // finished or processing
				totalSize: 0,
				remainTime: null,
				// location: null,
				list: [],
			};
		default:
			return state;
	}
};
