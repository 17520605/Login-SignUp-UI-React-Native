import { typeReducer } from "../../../utilities/constants";

const initState = {
	list: [
		// ...properties of community,
		// cats: []
	],
	activeFavorite: null,
	sortBy: "",
	currentCommunity: {},
};

const genMenuData = (list, originList) => {
	for (let i = 0; i < list.length; i++) {
		let childFolder = originList.filter((x) => x.parent === list[i].id);
		if (childFolder.length > 0) {
			list[i].children = childFolder;
			genMenuData(list[i].children, originList);
		} else if (list[i].children) {
			delete list[i].children;
		}
	}
};

const label = (folder, layer) => {
	folder.layer = layer;
	folder.children &&
		folder.children.forEach((subfolder) => label(subfolder, layer + 1));
};

const genDataList = (dataFolders) => {
	let listFolder = [];

	let folderRoot = dataFolders.filter((o) => o.id === 1);
	let secondaryChildren = dataFolders.filter((o) => o.parent === 1);

	listFolder.push(...secondaryChildren);
	genMenuData(listFolder, dataFolders);
	label(folderRoot[0], 0);
	secondaryChildren.forEach((o) => label(o, 1));

	return listFolder;
};

const genDataListV1 = (dataFolders) => {
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

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.communities.list:
			return {
				...state,
				list: action.payload,
			};
		case typeReducer.communities.editCom: {
			let { comId, updatedData } = action.payload;
			let cloneState = JSON.parse(JSON.stringify(state));
			let idx = cloneState.list.findIndex((o) => o.id === comId);
			Object.assign(cloneState.list[idx], updatedData);
			return cloneState;
		}
		case typeReducer.communities.cats: {
			const { comId, cats } = action.payload;
			let cloneState = JSON.parse(JSON.stringify(state));
			let idx = cloneState.list.findIndex((o) => o.id === comId);
			if (idx > -1) {
				cloneState.list[idx].cats = cats;
				cloneState.list[idx].classifiedCats = genDataList(cats);
				cloneState.list[idx].list = genDataListV1(cats);
				cloneState.currentCommunity.classifiedCats = genDataList(cats);
			}
			return cloneState;
		}
		case typeReducer.communities.editCats: {
			let { comId, updatedFolder } = action.payload;
			let cloneState = JSON.parse(JSON.stringify(state));
			let idx = cloneState.list.findIndex((o) => o.id === comId);
			if (idx > -1) {
				let idxCat = cloneState.list[idx].cats.findIndex(
					(o) => o.id === updatedFolder.id
				);

				if (idxCat > -1) {
					cloneState.list[idx].cats[idxCat] = updatedFolder;
				}
				cloneState.list[idx].classifiedCats = genDataList(
					cloneState.list[idx].cats
				);
			}
			return cloneState;
		}
		case typeReducer.communities.removeCats: {
			let { comId, deletedFolder } = action.payload;
			let cloneState = JSON.parse(JSON.stringify(state));
			let idx = cloneState.list.findIndex((o) => o.id === comId);
			if (idx > -1) {
				let idxComCat = cloneState.list[idx].cats.findIndex(
					(o) => o.id === deletedFolder.id
				);
				if (idxComCat > -1) {
					cloneState.list[idx].cats.splice(idxComCat, 1);
				}
			}
			cloneState.list[idx].classifiedCats = genDataList(
				cloneState.list[idx].cats
			);
			return cloneState;
		}

		case typeReducer.communities.favorite:
			return {
				...state,
				activeFavorite: action.payload,
			};
		case typeReducer.communities.sortBy:
			return {
				...state,
				sortBy: action.payload,
			};
		case typeReducer.communities.current: {
			let { comId } = action.payload;
			let cloneState = JSON.parse(JSON.stringify(state));
			let idx = cloneState.list.findIndex((o) => o.id === comId);
			if (idx > -1) {
				cloneState.currentCommunity = cloneState.list[idx];
			}
			return cloneState;
		}
		default:
			return state;
	}
};
