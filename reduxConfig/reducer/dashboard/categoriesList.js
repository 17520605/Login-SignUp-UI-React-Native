import { typeReducer } from "../../../utilities/constants";

const initState = null;
// {
//     data: [], // original list,
//     list: [], // list has layers and group
//     pages: {},
//     items: {},
//     deletedData: [],
// }

const genDataList = (dataFolders) => {
	let listFolder = [];
	const genMenuData = (list, originList) => {
		for (let i = 0; i < list.length; i++) {
			let childFolder = originList.filter((x) => x.parent === list[i].id);
			if (childFolder.length > 0) {
				list[i].childrenList = childFolder;
				genMenuData(list[i].childrenList, originList);
			} else if (list[i].childrenList) {
				delete list[i].childrenList;
			}
		}
	};

	const label = (folder, layer) => {
		folder.layer = layer;
		folder.childrenList &&
			folder.childrenList.forEach((subfolder) => label(subfolder, layer + 1));
	};

	let folderRoot = dataFolders.find((x) => x.id === 1);

	listFolder.push(folderRoot);
	genMenuData(listFolder, dataFolders);
	label(listFolder[0], 0);
	return listFolder;
};

const sortList = (originList, direction) => {
	let list = JSON.parse(JSON.stringify(originList));

	list.sort((a, b) => {
		let textA = a.title.toUpperCase();
		let textB = b.title.toUpperCase();
		return textA < textB ? -1 : textA > textB ? 1 : 0;
	});
	if (direction === "za") list.reverse();
};

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.categoriesList:
			let json = action.payload;
			// separate non-deleted/deleted folders
			let dataFolders = json.data.filter((x) => x.deleted === 0);
			let deletedDataFolders = json.data.filter((x) => x.deleted === 1);

			json.data = dataFolders;
			json.deletedData = deletedDataFolders;
			json.list = genDataList(dataFolders);
			return json;
		case typeReducer.categoriesListEdit:
			if (state == null) return state;
			let updatedState = JSON.parse(JSON.stringify(state));
			const updateValue = (value) => {
				let index = updatedState.data.findIndex((x) => x.id === value.id);
				if (index > -1) updatedState.data[index] = value;
				else {
					index = updatedState.deletedData.findIndex((x) => x.id === value.id);
					if (index > -1) updatedState.deletedData[index] = value;
				}
			};
			if (Array.isArray(action.payload) && action.payload.length > 0) {
				action.payload.map((e) => updateValue(e));
			} else {
				updateValue(action.payload);
			}
			const updatedList = genDataList(updatedState.data);
			updatedState.list = updatedList;

			return updatedState;
		case typeReducer.categoriesListEditFromSocket:
			if (state == null) return state;
			let updatedStateSocket = JSON.parse(JSON.stringify(state));
			const updateFolder = (e, index, dataObj) => {
				if (e.assetId1 != null && e.assetId1 != undefined && e.assetId1 > 0)
					updatedStateSocket[dataObj][index].assetId1 = e.assetId1;
				if (e.assetId2 != null && e.assetId2 != undefined && e.assetId2 > 0)
					updatedStateSocket[dataObj][index].assetId2 = e.assetId2;
				if (e.assetId3 != null && e.assetId3 != undefined && e.assetId3 > 0)
					updatedStateSocket[dataObj][index].assetId3 = e.assetId3;
				if (e.assetId4 != null && e.assetId4 != undefined && e.assetId4 > 0)
					updatedStateSocket[dataObj][index].assetId4 = e.assetId4;
				if (
					e.assetRefCount != null &&
					e.assetRefCount != undefined &&
					e.assetRefCount >= 0
				)
					updatedStateSocket[dataObj][index].assetRefCount = e.assetRefCount;
				if (
					e.totalAsset != null &&
					e.totalAsset != undefined &&
					e.totalAsset >= 0
				)
					updatedStateSocket[dataObj][index].totalAsset = e.totalAsset;
				if (
					e.totalFullAsset != null &&
					e.totalFullAsset != undefined &&
					e.totalFullAsset >= 0
				)
					updatedStateSocket[dataObj][index].totalFullAsset = e.totalFullAsset;
			};

			action.payload.map((e) => {
				let index = updatedStateSocket.data.findIndex(
					(x) => x.id === parseInt(e.id)
				);
				if (index === -1) {
					index = updatedStateSocket.deletedData.findIndex(
						(x) => x.id === parseInt(e.id)
					);
					if (index > -1) updateFolder(e, index, "deletedData");
				} else {
					updateFolder(e, index, "data");
				}
			});

			const updatedListSocket = genDataList(updatedStateSocket.data);
			updatedStateSocket.list = updatedListSocket;

			return updatedStateSocket;
		case typeReducer.categoriesListDelete:
			if (state == null) return state;
			let updatedStateDeleted = JSON.parse(JSON.stringify(state));
			const updateValueDeleted = (value) => {
				let index = updatedStateDeleted.data.findIndex(
					(x) => x.id === value.id
				);
				if (index > -1) {
					updatedStateDeleted.data.splice(index, 1);
					updatedStateDeleted.deletedData.unshift(value);
				} else {
					index = updatedStateDeleted.deletedData.findIndex(
						(x) => x.id === value.id
					);
					if (index > -1) {
						updatedStateDeleted.deletedData.splice(index, 1);
						updatedStateDeleted.data.unshift(value);
					}
				}
			};
			if (Array.isArray(action.payload) && action.payload.length > 0) {
				action.payload.map((e) => updateValueDeleted(e));
			} else {
				updateValueDeleted(action.payload);
			}
			const updatedListDeleted = genDataList(updatedStateDeleted.data);
			updatedStateDeleted.list = updatedListDeleted;

			return updatedStateDeleted;
		case typeReducer.categoriesListRemove:
			if (state == null) return state;
			let deletedState = JSON.parse(JSON.stringify(state));
			const removeValue = (value) => {
				let index = deletedState.deletedData.findIndex(
					(x) => x.id === value.id
				);
				if (index > -1) deletedState.deletedData.splice(index, 1);
			};
			if (Array.isArray(action.payload) && action.payload.length > 0) {
				action.payload.map((e) => removeValue(e));
			} else {
				removeValue(action.payload);
			}
			const updatedListRemoved = genDataList(deletedState.data);
			deletedState.list = updatedListRemoved;

			return deletedState;
		default:
			return state;
	}
};
