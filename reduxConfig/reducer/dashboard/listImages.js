import {
	addAttributePageAndIndexToAsset,
	convertDateTime,
	updatePageAndIndexForAsset,
} from "../../../utilities/common";
import { sortColumns, typeReducer } from "../../../utilities/constants";

const initState = {
	data: [],
	sortedList: [], // only available in timeline mode
	items: {},
	pages: {},
	isGroup: false,
}; // list images

const sortListImages = (listImages, direction) => {
	let list = JSON.stringify(listImages);
	list = JSON.parse(list);

	list.data.map((e) => {
		e.data.sort((a, b) => {
			let textA = a.title.toUpperCase();
			let textB = b.title.toUpperCase();
			return textA < textB ? -1 : textA > textB ? 1 : 0;
		});
		if (direction === "za") e.data.reverse();
	});

	let tempList = [];

	list.data.map((e) => {
		e.data.map((x) => tempList.push(x));
	});

	list.sortedList = tempList;

	return list;
};

const listImagesHandle = (json) => {
	let sortBy = 'latest_shooting_date';
	switch (sortBy) {
		case "latest_shooting_date":
		case "earliest_shooting_date":
			sortBy = 0;
			break;
		case "latest_created_date":
		case "earliest_created_date":
			sortBy = 2;
			break;
		case "a-z":
		case "z-a":
			sortBy = 1;
			break;
		default:
			sortBy = 0;
			break;
	}

	let listClone = JSON.stringify(json.data);
	listClone = JSON.parse(listClone);
	let listDayGroup = [];
	let listOutput = {};

	listOutput.items = { ...json.items };
	listOutput.pages = { ...json.pages };
	listOutput.data = [];
	listOutput.sortedList = [];

	listClone.map((e) => {
		let d = convertDateTime(e[sortColumns[sortBy]]).date;
		let dt = e[sortColumns[sortBy]];
		let obj = listDayGroup.find((x) => x.d === d);
		if (!obj) {
			listDayGroup.push({
				d,
				raw: e[sortColumns[sortBy]],
				convert: convertDateTime(e[sortColumns[sortBy]]),
			});
		}
		e[sortColumns[sortBy]] = dt;
		e.dateGroup = d;
	});

	listDayGroup.map((e) => {
		let data = [];
		listClone.map((x, i) => {
			// tach ra theo ngay
			if (x.dateGroup === e.d) {
				if (!x.page) {
					x.page = json.pages.current;
				}
				if (!x.index) {
					x.index = (x.page - 1) * 100 + (i % 100);
				}
				data.push(x);
				listOutput.sortedList.push(x);
			}
		});
		listOutput.data.push({
			day: e.raw,
			data,
		});
	});

	listOutput.isGroup = true;
	listOutput.sortedList = listOutput.sortedList.sort(
		(a, b) => a.index - b.index
	);
	return listOutput;
};

const revertListImageHandle = (json) => {
	const listClone = JSON.parse(JSON.stringify(json));
	if (listClone?.isGroup) {
		listClone.data = JSON.parse(JSON.stringify(listClone.sortedList));
		delete listClone["sortedList"];
		listClone.isGroup = false;
	}
	return listClone;
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.listImages:
			const assetDisplayMode = global.variables?.assetDisplayMode;
			let resultData,
				listImages = JSON.parse(JSON.stringify(action.payload));

			if (assetDisplayMode === 1) {
				resultData = listImagesHandle(listImages);
			} else {
				resultData = revertListImageHandle(listImages);
			}
			resultData = addAttributePageAndIndexToAsset(resultData);
			return resultData;
		case typeReducer.listImagesEdit:
			let updatedData = JSON.parse(JSON.stringify(state));
			if (updatedData.sortedList && updatedData.data.length > 0) {
				// timeline mode
				let index = updatedData.sortedList.findIndex(
					(x) => x.id === action.payload.id
				);
				if (index > -1) updatedData.sortedList[index] = action.payload;
				if (updatedData.data[0].data) {
					for (let i = 0; i < updatedData.data.length; i++) {
						let indexData = updatedData.data[i].data.findIndex(
							(x) => x.id === action.payload.id
						);
						if (indexData > -1) {
							updatedData.data[i].data[indexData] = action.payload;
							break;
						}
					}
				}
			} else {
				// folder mode
				let index = updatedData.data.findIndex(
					(e) => e.id === action.payload.id
				);
				if (index > -1) updatedData.data[index] = action.payload;
			}
			return updatedData;
		case typeReducer.listImagesEditFromSocket:
			let updatedDataSocket = JSON.parse(JSON.stringify(state));
			if (updatedDataSocket.sortedList && updatedDataSocket.data.length > 0) {
				// timeline mode
				const updateArraySocketTimeline = (item) => {
					let indexSocket = updatedDataSocket.sortedList.findIndex(
						(x) => x.id === parseInt(item.id)
					);
					if (indexSocket > -1) {
						if (item.isNarration === 0 || item.isNarration === 1)
							updatedDataSocket.sortedList[indexSocket].isNarration =
								item.isNarration;
					}
					if (updatedDataSocket.data[0].data) {
						for (let i = 0; i < updatedDataSocket.data.length; i++) {
							let indexDataSocket = updatedDataSocket.data[i].data.findIndex(
								(x) => x.id === parseInt(item.id)
							);
							if (indexDataSocket > -1) {
								if (item.isNarration === 0 || item.isNarration === 1)
									updatedDataSocket.data[i].data[indexDataSocket].isNarration =
										item.isNarration;
								break;
							}
						}
					}
				};
				action.payload.map((e) => {
					updateArraySocketTimeline(e);
				});
			} else {
				// folder mode
				action.payload.map((e) => {
					let indexDataSocket = updatedDataSocket.data.findIndex(
						(item) => item.id === parseInt(e.id)
					);
					if (indexDataSocket > -1)
						updatedDataSocket.data[indexDataSocket].isNarration = e.isNarration;
				});
			}
			return updatedDataSocket;
		case typeReducer.listImagesInfoFromSocket:
			let dataClone = JSON.parse(JSON.stringify(state));

			const updateDataSocket = (dataFromSocket) => {
				let indexSocket = dataClone?.sortedList?.findIndex(
					(x) => x?.id === parseInt(dataFromSocket?.id)
				);
				
				if (indexSocket > -1) {
					dataClone.sortedList[indexSocket] = {...dataClone?.sortedList[indexSocket], ...dataFromSocket}
				}else {
					indexSocket = dataClone?.data?.findIndex(
						(x) => x.id === parseInt(dataFromSocket.id)
					);
					dataClone.data[indexSocket] = {...dataClone?.data[indexSocket], ...dataFromSocket}
				}
			};

			if (dataClone.sortedList || dataClone.data.length > 0) {
				action.payload.map((e) => {
					updateDataSocket(e);
				});
			}
			return dataClone;
		case typeReducer.listImagesRemove:
			let deletedData = JSON.parse(JSON.stringify(state));
			const deleteValue = (value) => {
				if (deletedData.sortedList && deletedData.data.length > 0) {
					// timeline mode
					let index = deletedData.sortedList.findIndex(
						(x) => x.id === value.id
					);
					if (index > -1) deletedData.sortedList.splice(index, 1);
					if (deletedData.data[0].data) {
						for (let i = 0; i < deletedData.data.length; i++) {
							let indexData = deletedData.data[i].data.findIndex(
								(x) => x.id === value.id
							);
							if (indexData > -1) {
								deletedData.data[i].data.splice(indexData, 1);
								break;
							}
						}
					}
				} else {
					// folder mode
					let index = deletedData.data.findIndex((e) => e.id === value.id);
					if (index > -1) deletedData.data.splice(index, 1);
				}
			};

			if (Array.isArray(action.payload) && action.payload.length > 0) {
				action.payload.map((e) => deleteValue(e));
			} else {
				deleteValue(action.payload);
			}

			if (deletedData.sortedList && deletedData.data.length > 0) {
				deletedData.data = deletedData.data.filter((x) => x.data.length > 0);
			}
			//NOTE: update index
			deletedData.data = updatePageAndIndexForAsset(deletedData.data);
			return deletedData;
		case typeReducer.listImagesEditProgress:
			let updateData = JSON.parse(JSON.stringify(state));
			updateData.data.map((item) => {
				if (action.payload.find((e) => e.id === item.id)) {
					item.progress = 100;
					item.progressMezzanine = 100;
					item.progressProxy = 100;
					item.progressThumb = 100;
				}
			});
			return updateData;
		default:
			return state;
	}
};
