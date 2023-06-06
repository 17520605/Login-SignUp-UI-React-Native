import {
	typeReducer,
	defaultPerPage,
	defaultCategoryId,
	sortColumns,
} from "../../../utilities/constants";
import _ from 'lodash';
/**
 * !Important:
 *
 * Bất cứ khi nào 1 trong những giá trị của object filterImageList thay đổi, nó sẽ tự động refresh lại layout image
 * (được setup ở MainLayout.js)
 */

let sortBy = 'latest_shooting_date';
let sortGroup = 'a-z';
switch (sortBy) {
	case "latest_shooting_date": // sort theo timeline
		sortBy = `-${sortColumns[0]}`;
		break;
	case "earliest_shooting_date":
		sortBy = sortColumns[0];
		break;
	case "latest_created_date": // sort theo timeline
		sortBy = `-${sortColumns[2]}`;
		break;
	case "earliest_created_date":
		sortBy = sortColumns[2];
		break;
	case "a-z": // sort a-z trên toàn list
		sortBy = sortColumns[1];
		break;
	case "z-a":
		sortBy = `-${sortColumns[1]}`;
		break;
	case "none": // for list faces: reset on first loading
		localStorage.setItem("IMASortBy", "latest_shooting_date");
		sortBy = `-${sortColumns[0]}`;
		break;
	default:
		sortBy = `-${sortColumns[0]}`;
}

switch (sortGroup) {
	case "a-z": // sort a-z theo từng group của timeline,
		// trong trường hợp sortBy == latest_shooting_date || sortBy == earliest_shooting_date
		sortGroup = "title";
		break;
	case "z-a":
		sortGroup = "-title";
		break;
	default:
		sortGroup = "title";
}

const initState = {
	// filter param for get list images
	searchText: "",
	searchTextCom: "", // q string in com
	categoryId: defaultCategoryId, // number, default is COMPANY_ROOT, with has id = 1, PERSONAL_ROOT (my archive) has id = 2
	tagId: null, // number
	page: 1, // number
	perPage: defaultPerPage,
	sortBy: sortBy, // string
	timeline: null, // [new Date, new Date]
	deleted: null, // 1 || 0
	publicTag: null, // 1 || 0
	community: null, // Community's id
	mediaType: null, // array of string,
	comCatId: null, // Category's id in community
	mimetype: null, // array of string
	extension: null, // array of string
	size: null, // array of two number (in bytes)
	sortGroup: sortGroup, // string
	face: null, // number face id
	aspect: null, // 1: tall, 2: wide, 3: square
	location: null, // json format includes: displayName, lng, lat, posCountry, posRegion, posContinent
	quality: null, // // 1: high, 2: medium, 3: low
	similarity: 1,
	forceReload: false,
};
// 4 folder can't be activated at the same time
// deleted
// publicTag
// community
// categoryId

export default (state = initState, action) => {
	switch (action.type) {
		case typeReducer.filterImageList.searchText:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				face: null, // reset face search
				// for advanced search:
				aspect: action.payload.aspect || state.aspect,
				mimetype: action.payload.mimetype || state.mimetype,
				size: action.payload.size || state.size,
				quality: action.payload.quality || state.quality,
				timeline: action.payload.timeline || state.timeline,
				//
				location: action.payload.location || state.location,
				searchText: action.payload.text,
			};
		case typeReducer.filterImageList.searchTextCom:
			return {
				...state,
				searchTextCom: action.payload.text,
			};
		case typeReducer.filterImageList.categoryId:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				deleted: null,
				publicTag: null,
				community: null,
				comCatId: null,
				face: null,
				location: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				categoryId: action.payload,
				searchText: "",
				searchTextCom: "",
			};

		case typeReducer.filterImageList.deletedCategoryId:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				deleted: 1,
				publicTag: null,
				community: null,
				comCatId: null,
				face: null,
				location: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				categoryId: action.payload,
				searchText: "",
				searchTextCom: "",
			};
		case typeReducer.filterImageList.tagId:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				tagId: action.payload,
			};

		case typeReducer.filterImageList.page:
			return {
				...state,
				page: action.payload,
			};

		case typeReducer.filterImageList.perPage:
			return {
				...state,
				perPage: action.payload,
			};

		case typeReducer.filterImageList.sortBy:
			return {
				...state,
				page: 1,
				sortBy: action.payload,
			};

		case typeReducer.filterImageList.sortGroup:
			return {
				...state,
				sortGroup: action.payload,
			};

		case typeReducer.filterImageList.timeline: // need 2 info: categoryId & timeline (timeline with or withour folder)
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				categoryId:
					action.payload.categoryId !== undefined
						? action.payload.categoryId
						: state.categoryId,
				// community: null,
				comCatId: null,
				face: null,
				location: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				timeline: action.payload.timeline,
				searchText: "",
				searchTextCom: "",
			};
		case typeReducer.filterImageList.deleted:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				categoryId: null,
				publicTag: null,
				community: null,
				comCatId: null,
				face: null,
				location: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				deleted: action.payload,
				searchText: "",
				searchTextCom: "",
			};
		case typeReducer.filterImageList.publicTag: // not used
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				categoryId: null,
				deleted: null,
				community: null,
				comCatId: null,
				face: null,
				location: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				publicTag: action.payload,
			};
		case typeReducer.filterImageList.community:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				categoryId: null,
				deleted: null,
				publicTag: null,
				face: null,
				location: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				community: action.payload,
				comCatId: null,
				searchText: "",
			};
		case typeReducer.filterImageList.comCatId:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				categoryId: null,
				deleted: null,
				publicTag: null,
				face: null,
				location: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				community: action.payload.comId,
				comCatId: action.payload.comCatId,
				searchText: "",
			};
		case typeReducer.filterImageList.mimetype:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				face: null,
				location: null,
				mimetype: action.payload,
			};
		case typeReducer.filterImageList.mediatype:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				face: null,
				location: null,
				mediaType: action.payload,
			};
		case typeReducer.filterImageList.extension:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				face: null,
				location: null,
				extension: action.payload,
			};
		case typeReducer.filterImageList.quality:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				face: null,
				location: null,
				quality: action.payload,
			};
		case typeReducer.filterImageList.size:
			return {
				...state,
				page: 1,
				perPage: defaultPerPage,
				face: null,
				location: null,
				size: action.payload,
			};
		case typeReducer.filterImageList.custom:
			return {
				...state,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				page: 1,
				perPage: defaultPerPage,
				searchText: "",
				searchTextCom: "",
				face: null,
				location: null,
				tagId: null,
				deleted: null,
				timeline: action.payload.timeline,
				publicTag: action.payload.publicTag,
				community: action.payload.community,
				mimetype: action.payload.mimetype,
				size: action.payload.size,
				aspect: action.payload.aspect,
				quality: action.payload.quality,
				extension: action.payload.extension
			};
		case typeReducer.filterImageList.resetToDefault:
			return {
				searchText: "",
				searchTextCom: "",
				categoryId: defaultCategoryId,
				tagId: null,
				page: 1,
				perPage: defaultPerPage,
				timeline: null,
				deleted: null,
				publicTag: null,
				community: null,
				comCatId: null,
				mimetype: null,
				mediaType: null,
				quality: null,
				sortGroup: sortGroup,
				size: null,
				face: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				aspect: null,
				location: null,
				extension: null
			};
		case typeReducer.filterImageList.allNull:
			return {
				searchText: "",
				searchTextCom: "",
				categoryId: null,
				tagId: null,
				page: 1,
				perPage: defaultPerPage,
				timeline: null,
				deleted: null,
				publicTag: null,
				community: null,
				comCatId: null,
				mimetype: null,
				mediaType: null,
				quality: null,
				sortGroup: sortGroup,
				size: null,
				face: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				aspect: null,
				location: null,
				extension: null
			};
		case typeReducer.filterImageList.face: // remove any filter
			return {
				...state,
				searchText: "",
				searchTextCom: "",
				deleted: null,
				categoryId: 1,
				tagId: null,
				location: null,
				page: 1,
				perPage: defaultPerPage,
				face: action.payload,
				similarity: 1,
			};
		case typeReducer.filterImageList.similarity:
			return {
				...state,
				searchText: "",
				searchTextCom: "",
				deleted: null,
				categoryId: null,
				tagId: null,
				location: null,
				page: 1,
				perPage: defaultPerPage,
				sortBy: "none",
				similarity: action.payload,
			};
		case typeReducer.filterImageList.aspect:
			return {
				...state,
				searchText: "",
				searchTextCom: "",
				tagId: null,
				page: 1,
				perPage: defaultPerPage,
				aspect: action.payload,
			};
		case typeReducer.filterImageList.set:
			const prevState = JSON.parse(JSON.stringify(state));
			for (const key in action.payload) {
				const obj = action.payload[key];
				// eslint-disable-next-line
				if (typeof obj !== undefined) {
					if (obj == null) delete prevState[key];
					else prevState[key] = obj;
				}
			}
			const check =  _.isEqual(prevState,state);
		
			if(check) {
				return state;
			}
			
			return prevState;
		case typeReducer.filterImageList.resetCurrentFolder:
			// action.payload = categoryId
			return {
				...state,
				categoryId: action.payload || state.categoryId,
				searchText: "",
				searchTextCom: "",
				tagId: null,
				page: 1,
				perPage: defaultPerPage,
				timeline: null,
				deleted: null,
				publicTag: null,
				community: null,
				comCatId: null,
				mimetype: null,
				mediaType: null,
				quality: null,
				sortGroup: sortGroup,
				size: null,
				face: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				aspect: null,
				location: null,
				extension: null
			};
		case typeReducer.filterImageList.resetCurrentCommunity:
			return {
				...state,
				categoryId: null,
				searchText: "",
				searchTextCom: "",
				tagId: null,
				page: 1,
				perPage: defaultPerPage,
				timeline: null,
				deleted: null,
				publicTag: null,
				community: action.payload || state.community,
				comCatId: null,
				mimetype: null,
				mediaType: null,
				quality: null,
				sortGroup: sortGroup,
				size: null,
				face: null,
				sortBy: state.sortBy === "none" ? `-${sortColumns[0]}` : state.sortBy,
				aspect: null,
				location: null,
				extension: null
			};
		case typeReducer.filterImageList.forceReload:
			return {
				...state,
				forceReload: action.payload,
			};
		default:
			return state;
	}
};
