// ROOT OF UPLOAD API
const API_ROOT = "https://dev-api-ee.mymy.io/api/v1/";
const API_ROOT_V2 = "https://dev-api-ee.mymy.io/api/v2/";
const API_ROOT_UPLOAD = "https://dev-api-ee.mymy.io/upload/v1/";
const API_SOCKET = "https://dev-api-ee.mymy.io";
const VERSION = "mymy-ee-client-dev-1.0";

// API For ee.mymy.io
// const API_ROOT = "https://api-ee.mymy.io/api/v1/";
// const API_ROOT_V2 = "https://api-ee.mymy.io/api/v2/";
// const API_ROOT_UPLOAD = "https://api-ee.mymy.io/upload/v1/";
// const API_SOCKET = "https://api-ee.mymy.io";
// const VERSION = "mymy-ee-client-ee-1.0";

// API For http://192.168.1.93/api
// const API_ROOT = "http://192.168.1.93/api/v1/";
// const API_ROOT_V2 = "http://192.168.1.93/api/v2/";
// const API_ROOT_UPLOAD = "http://192.168.1.93/upload/v1/";
// const API_SOCKET = "http://192.168.1.93";
// const VERSION = "mymy-ee-client-ip-1.0";

// API For http://223.130.134.223/api
// const API_ROOT = "http://223.130.134.223/api/v1/";
// const API_ROOT_V2 = "http://223.130.134.223/api/v2/";
// const API_ROOT_UPLOAD = "http://223.130.134.223/upload/v1/";
// const API_SOCKET = "http://223.130.134.223";
// const VERSION = "mymy-ee-client-ip-1.0";

// API For gemiso.mymy.io
// const API_ROOT = "https://api-gemiso.mymy.io/api/v1/";
// const API_ROOT_V2 = "https://api-gemiso.mymy.io/api/v2/";
// const API_ROOT_UPLOAD = "https://api-gemiso.mymy.io/upload/v1/";
// const API_SOCKET = "https://api-gemiso.mymy.io";
// const VERSION = "mymy-ee-client-gemiso-1.0";

const KEY_CAPCHA_SITE = "6LfkFIchAAAAADb18A9AAAYyjjVwHjLUUY_1iPdk";

const API_LEAFLET = "https://nominatim.openstreetmap.org";
const mapTiles = {
	openstreetmap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
	mapbox:
		"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidmFuZGluaCIsImEiOiJja3M2eWZibzQwZmhyMm9ybms3cmJxaHU3In0.jbrO7V1iF6E8PvGMKbvgpw",
	thunderforest:
		"https://tile.thunderforest.com/landscape/{z}/{x}/{y}.png?apikey=52714447bb4646e6b48f676d44dc6ec9",
};

const apiName = {
	login: "login",
	logout: "users/log_out",
	register: "users",
	recaptcha_verify: "recaptcha_verify",
	forgot: "users/request_reset_password",
	reset: "users/reset_password",
	setting: "settings",
	user: "users",
	categories: "categories",
	assets: "assets",
	assetcatalogs: "assetcatalogs",
	tags: "tags",
	dashboards: "dashboards",
	storage: "storages",
	dictionary: "dictionaries",
	dictionary_code: "dictionaries/code",
	locale: "locales",
	cmeta: "cmetas",
	downloadedlist: "downloadedlists",
	uploadedlist: "uploadedlists",
	cmetadetail: "cmetadetails",
	face: "faces",
	storageassigns: "storageassigns",
	ingestconfigs: "ingestconfigs",
	outgestconfigs: "outgestconfigs",
	assetaudios: "assetaudios",
	comassetaudios: "comassetaudios",
	tasks: "tasks",
	trashes: "trashes",
	uploadedlists:"uploadedlists",
	communities: "communities",
	community_categories: "community_categories",
	community_categories2: "community_categories2",
	community_assets: "community_assets",
	community_assets_uploading: "community_assets/uploading",
	community_users: "community_users",
	community_asset_comments: "community_asset_comments",
	community_asset_wishes: "community_asset_wishes",
	assets_mimetype: "assets/mimetype",
	assets_extension: "assets/extension",
	request_password_admin: "notifications/create_reset_password_request",
	create_delete_categories_request:
		"notifications/create_delete_categories_request",
	create_delete_assets_request: "notifications/create_delete_assets_request",
	check_token_expired: "users/check_token_expired",
};

const expireCookies = 7; // day
const enableDragFolder = false;
const faceDetector = "tiny_face_detector";
const detectorType = ["ssd_mobilenetv1", "tiny_face_detector"];
// ssd_mobilenetv1, tiny_face_detector

// user type: 1 - anonymous, 2 - normal user, 3 - moderator, 4 - admin, 5- super admin

const typeReducer = {
	auth: "SET_TOKEN",
	authInfo: "SET_AUTH_INFO",
	theme: "SET_THEME",
	lang: "SET_LANGUAGE",
	loader: "SET_LOADER_PAGE",
	loaderTheme: "SET_LOADER_THEME",
	setLoaderAsset: "SET_LOADER_ASSET",
	statusNoti: "SET_STATUS_NOTIFICATION",
	appInfo_appName: "SET_APP_INFO_NAME",
	appInfo_appLogo: "SET_APP_INFO_LOGO",
	appInfo_isRefetch: "SET_APP_INFO_REFRESH",
	appInfo_nameCommunity: "SET_APP_INFO_NAME_COMMUNITY",
	alertModal: "SET_ALERT_MODAL",
	closeAlertModal: "SET_CLOSE_ALERT_MODAL",
	verifyModal: "SET_VERIFY_MODAL",
	closeVerifyModal: "SET_CLOSE_VERIFY_MODAL",
	advanceSearch: "SET_ADVANCE_SEARCH",
	toastModal: "SET_TOAST_MODAL",
	closeToastModal: "SET_CLOSE_TOAST_MODAL",
	filterImageList: {
		searchText: "SET_FILTER_IMAGE_LIST_SEARCHTEXT",
		searchTextCom: "SET_FILTER_IMAGE_LIST_SEARCHTEXT_IN_COM",
		categoryId: "SET_FILTER_IMAGE_LIST_CATEGORY_ID",
		communityId: "SET_FILTER_IMAGE_LIST_COMMUNITY_ID",
		tagId: "SET_FILTER_IMAGE_LIST_TAG_ID",
		page: "SET_FILTER_IMAGE_LIST_PAGE",
		perPage: "SET_FILTER_IMAGE_LIST_PER_PAGE",
		sortBy: "SET_FILTER_IMAGE_LIST_SORT_BY",
		sortGroup: "SET_FILTER_IMAGE_LIST_SORT_GROUP",
		timeline: "SET_FILTER_IMAGE_LIST_TIMELINE",
		deleted: "SET_FILTER_IMAGE_LIST_DELETED",
		publicTag: "SET_FILTER_IMAGE_LIST_PUBLIC",
		community: "SET_FILTER_IMAGE_LIST_COMMUNITY",
		comCatId: "SET_FILTER_IMAGE_COM_CAT_COMMUNITY",
		mimetype: "SET_FILTER_IMAGE_LIST_MINETYPE",
		extension: "SET_FILTER_IMAGE_LIST_EXTENSION",
		mediatype: "SET_FILTER_MEDIA_TYPE",
		size: "SET_FILTER_IMAGE_LIST_SIZE",
		quality: "SET_FILTER_IMAGE_LIST_QUALITY",
		custom: "SET_FILTER_IMAGE_LIST_CUSTOM",
		allNull: "SET_FILTER_IMAGE_LIST_ALL_NULL",
		face: "SET_FILTER_IMAGE_LIST_FACE",
		similarity: "SET_FILTER_IMAGE_LIST_SIMILARITY",
		shape: "SET_FILTER_IMAGE_LIST_SHAPE",
		set: "SET_FILTER_IMAGE_LIST",
		resetCurrentFolder: "RESET_FILTER_IMAGE_LIST_CURRENT_FOLDER",
		resetCurrentCommunity: "RESET_FILTER_IMAGE_LIST_CURRENT_COMMUNITY",
		aspect: "SET_FILTER_IMAGE_LIST_ASPECT",
		resetToDefault: "RESET_FILTER_IMAGE_LIST_DEFAULT",
		deletedCategoryId: "SET_FILTER_IMAGE_LIST_DELETED_FOLDER",
		forceReload: "SET_FILTER_FORCE_RELOAD",
	},
	listImages: "SET_LIST_IMAGES",
	listImagesEdit: "SET_LIST_IMAGES_EDIT",
	listImagesEditFromSocket: "SET_LIST_IMAGES_EDIT_FROM_SOCKET",
	listImagesInfoFromSocket: "SET_LIST_IMAGES_INFO_FROM_SOCKET",
	listImagesDelete: "SET_LIST_IMAGES_DELETE",
	listImagesRemove: "SET_LIST_IMAGES_REMOVE",
	listImagesEditProgress: "SET_LIST_IMAGES_EDIT_PROGRESS",
	listFolders: "SET_LIST_FOLDERS",
	customTagModal: "SET_CUSTOM_TAG_MODAL",
	tagsList: "SET_TAGS_LIST",
	categoriesList: "SET_CATEGORIES_LIST",
	categoriesListAdd: "SET_CATEGORIES_LIST_ADD",
	categoriesListEdit: "SET_CATEGORIES_LIST_EDIT",
	categoriesListEditFromSocket: "SET_CATEGORIES_LIST_EDIT_FROM_SOCKET",
	categoriesListDelete: "SET_CATEGORIES_LIST_DELETE",
	categoriesListRemove: "SET_CATEGORIES_LIST_REMOVE",
	statusLayout: {
		left: "SET_TOGGLE_LEFT_MENU",
		right: "SET_TOGGLE_RIGHT_PREVIEW",
		custom: "SET_CUSTOM_LAYOUT_PANEL",
	},
	createFolder: "SET_CREATE_FOLDER",
	toggleMenuConfig: "SET_TOGGLE_MENU_CONFIG",
	tabConfigure: "SET_TAB_CONFIGURE",
	settingList: "SET_SETTING_LIST",
	storageList: "SET_STORAGE_LIST",
	searchConfig: "SET_SEARCH_CONFIG",
	addModal: "SET_ADD_MODAL_CONFIG",
	refreshListConfig: "SET_REFRESH_LIST_CONFIG",
	dictionaryList: "SET_DICTIONARY_LIST",
	localeList: "SET_LOCALE_LIST",
	userList: "SET_USERS_LIST",
	metadataList: "SET_METADATA_LIST",
	infoProfile: "SET_INFO_PROFILE",
	infoProfile_timeFormat: "SET_INFO_PROFILE_TIME_FORMAT",
	uploadProgress: "SET_UPLOAD_PROGRESS",
	filterModal: "SET_FILTER_MODAL",
	listFaces: "SET_LIST_FACES",
	customCols: {
		add: "SET_ADD_CUSTOM_COLS_LIST",
		custom: "SET_CUSTOM_COLS_LIST",
	},
	enableTimeline: "SET_ENABLE_TIMELINE",
	tabCategories: "SET_CURRENT_TAB_CATEGORIES",
	setAssetDisplayMode: "SET_ASSET_DISPLAY_MODE",
	setActiveLayout: "SET_ACTIVE_LAYOUT_MODE",
	uploadModal: "SET_ACTIVE_UPLOAD_MODAL",
	selectedAssets: "SET_SELECTED_ASSETS",
	selectedFolders: "SET_SELECTED_FOLDERS",
	selectedItems: "SET_SELECTED_ITEMS",
	toggleSubFiles: "SET_TOGGLE_SUB_FILE",
	loaderImageLayout: "SET_LOADER_IMAGE_LAYOUT",
	uploadData: "SET_UPLOAD_DATA",
	setLoaderNextPage: "SET_LOADER_NEXT_PAGE",
	uploadProgress_reset: "RESET_UPLOAD_PROGRESS",
	openInfoDetail: "SET_OPEN_INFO_DETAIL",
	openSlider: "SET_OPEN_SLIDER",
	openCommentDetail: "SET_OPEN_COMMENT_DETAIL",
	setContextMenu: "SET_CONTEXT_MENU",
	menuOptionMobile: "SET_MENU_OPTION_MOBILE",
	add_viewportIDs: "ADD_VIEWPORT_ID",
	remove_viewportIDs: "REMOVE_VIEWPORT_ID",
	viewportStack: "SET_VIEWPORT_STACK",
	update_viewportStack: "UPDATE_VIEWPORT_STACK",
	thumbnailImage: "SET_THUMBNAIL_ID_IMAGES",
	removeThumbnailImage: "REMOVE_THUMBNAIL_IMAGES",
	timelineBar: "SET_TIMELINEBAR",
	timeline: "SET_TIMELINE",
	communities: {
		list: "SET_COMMUNITIES",
		editCom: "EDIT_COMMUNITIES",
		cats: "SET_COMMUNITIES_CATS",
		favorite: "SET_COMMUNITIES_FAVORITE",
		sortBy: "SET_COMMUNITIES_SORTBY",
		current: "SET_CURRENT_COMMUNITY",
		editCats: "EDIT_COMMUNITIES_CATEGORIES",
		removeCats: "REMOVE_COMMUNITIES",
	},
	pickingModal: {
		searchText: "SET_PICKING_MODAL_SEARCH_TEXT",
		open: "SET_STATUS_OPEN_PICKING_MODAL",
	},
	comments: {
		set: "SET_COMMENTS",
		updateContent: "UPDATE_COMMENT_CONTENT",
	},
	listAssetSlider: "SET_LIST_ASSSET_SLIDER",
	pageAssetSlider: "SET_PAGE_LIST_ASSSET_SLIDER",
	oldAsset: "SET_OLD_ASSET_LIST_ASSSET_SLIDER",
	renderAssets: "SET_RENDER_ASSETS",
};

const color = {
	colorSetTags: [
		"#4D4D4D",
		"#999999",
		"#FFFFFF",
		"#F44E3B",
		"#FE9200",
		"#FCDC00",
		"#DBDF00",
		"#A4DD00",
		"#68CCCA",
		"#73D8FF",
		"#AEA1FF",
		"#FDA1FF",
		"#333333",
		"#808080",
		"#cccccc",
		"#D33115",
		"#E27300",
		"#FCC400",
		"#B0BC00",
		"#68BC00",
		"#16A5A5",
		"#009CE0",
		"#7B64FF",
		"#FA28FF",
		"#000000",
		"#666666",
		"#B3B3B3",
		"#9F0500",
		"#C45100",
		"#FB9E00",
		"#808900",
		"#194D33",
		"#0C797D",
		"#0062B1",
		"#653294",
		"#AB149E",
	],
};

const storageTypeConstant = {
	LOCAL: 1,
	NETWORK_FILE_SYSTEM: 2,
	GOOGLE_STORAGE: 3,
	AMAZONE_S3: 4,
	FTP: 5,
	NAT: 6,
	AZURE: 7,
};

const storageType = [
	{ value: 1, name: "Local" },
	{ value: 2, name: "Network File System" },
	{ value: 3, name: "Google Storage" },
	{ value: 4, name: "Amazon S3" },
	{ value: 5, name: "FTP" },
	{ value: 6, name: "NAT" },
	{ value: 7, name: "Azure" },
];

const userType = [
	{ value: 1, name: "Anonymous" },
	{ value: 2, name: "Normal user" },
	{ value: 3, name: "Moderator" },
	{ value: 4, name: "Admin" },
	{ value: 5, name: "Superadmin" },
];

const mimeType = {
	PNG: "image/png",
	JPG: "image/jpg",
	JPEG: "image/jpeg",
	GIF: "image/gif",
	WEBP: "image/webp",
	SVG: "image/svg",
	SVG_XML: "image/svg+xml",
	BMP: "image/bmp",
	AVIF: "image/avif",
	TIFF: "image/tiff",
	JFIF: "image/jpeg+jfif",
	JFI: "image/jpeg+jfi",
	ICO: "image/x-icon",
	PNM: "image/x-portable-anymap",
	PBM: "image/x-portable-bitmap",
	IEF: "image/ief",
	NEF: "image/nef",
	CR2: "image/cr2",
	ORF: "image/orf",
	ARW: "image/arw",
	PEF: "image/pef",
	RAF: "image/raf",
	PCD: "image/pcd",
	CUR: "image/cur",
	DNG: "image/dng",
	DDS: "image/dds",
	HDR: "image/hdr",
	RW2: "image/rw2",
	NRW: "image/nrw",
	XCF: "image/xcf",
	HEIF: "image/heif",
	HEIC: "image/heic",
};

const imageExtensions = {
	JPG: "jpg",
	PNG: "png",
	JPEG: "jpeg",
	GIF: "gif",
	WEBP: "webp",
	SVG: "svg",
	SVG_XML: "svg+xml",
	AVIF: "avif",
	TIFF: "tiff",
	JFIF: "jfif",
	JFI: "jfi",
	BMP: "bmp",
	ICO: "x-icon",
	PNM: "x-portable-anymap",
	PBM: "x-portable-bitmap",
	IEF: "ief",
	NEF: "nef",
	CR2: "cr2",
	ORF: "orf",
	ARW: "arw",
	PEF: "pef",
	RAF: "raf",
	PCD: "pcd",
	CUR: "cur",
	DNG: "dng",
	DDS: "dds",
	HDR: "hdr",
	RW2: "rw2",
	NRW: "nrw",
	XCF: "xcf",
	HEIC: "heic",
	HEIF: "heif",
	CRW: "crw",
	DCR: "dcr",
	ERF: "erf",
	KDC: "kdc",
	MOS: "mos",
	MRW: "mrw",
	RAW: "raw",
	SR2: "sr2",
	SRF: "srf",
	SRW: "srw",
	X3F: "x3f",
	TIF: "tif",
	JP2: "jp2",
	JXL: "jxl",
	PSD: "psd",
}

const extension = {
	JPG: "jpg",
	PNG: "png",
	JPEG: "jpeg",
	GIF: "gif",
	WEBP: "webp",
	SVG: "svg",
	SVG_XML: "svg+xml",
	AVIF: "avif",
	TIFF: "tiff",
	JFIF: "jfif",
	JFI: "jfi",
	BMP: "bmp",
	ICO: "x-icon",
	PNM: "pnm",
	PBM: "x-portable-bitmap",
	IEF: "ief",
	NEF: "nef",
	CR2: "cr2",
	ORF: "orf",
	ARW: "arw",
	PEF: "pef",
	RAF: "raf",
	PCD: "pcd",
	CUR: "cur",
	DNG: "dng",
	DDS: "dds",
	HDR: "hdr",
	RW2: "rw2",
	NRW: "nrw",
	XCF: "xcf",
	HEIC: "heic",
	HEIF: "heif",
	CRW: "crw",
	DCR: "dcr",
	ERF: "erf",
	KDC: "kdc",
	MOS: "mos",
	MRW: "mrw",
	RAW: "raw",
	SR2: "sr2",
	SRF: "srf",
	SRW: "srw",
	X3F: "x3f",
	TIF: "tif",
	JP2: "jp2",
	JXL: "jxl",
	PSD: "psd",

	//audio
	MPEG: "mpeg",
	WAVE: "wave",
	WAV: "wav",
	MP3: "mp3",
	AAC: "vnd.dlna.adts",
	WMA: "x-ms-wma",
	AU: "basic",
	AIFF: "aiff",
	AMR: "amr",
	OGA: "oga",
	M4A: "x-m4a",
	OGG: "ogg",
	WEBA: "weba",
	WEBM: "webm",
	FLAC: "flac",
	M4A_4: "m4a",
	MID: "mid",
	MIDI: "midi",
	WVE:"wve",

	//video
	MP4: "mp4",
	MJPEG: "mjpeg",
	MOV: "mov",
	X_MSVIDEO: "x-msvideo",
	AVI: "avi",
	FLV: "flv",
	MXF: "mxf",
	QT: "qt",
	WEB: "web",
	VID: "vid",

	// document
	DOC: "doc",
	DOCX: "docx",
	PDF: "pdf",
	XLS: "xls",
	XLSX: "xlsx",
	PPT: "ppt",
	PPTX: "pptx",
	TXT: "txt",
	HWP: "hwp",
	// HTML: "html",
	// HTM: "htm",\

	STL:"stl",
	OBJ:"obj",
	FBX:"fbx",
	GLB:"glb",
	GLTF:"gltf",
};

const audioExtensions = {
	MPEG: "mpeg",
	WAVE: "wave",
	WAV: "wav",
	MP3: "mp3",
	AAC: "vnd.dlna.adts",
	WMA: "x-ms-wma",
	AU: "basic",
	AIFF: "aiff",
	AMR: "amr",
	OGA: "oga",
	M4A: "x-m4a",
	OGG: "ogg",
	WEBA: "weba",
	WEBM: "webm",
	FLAC: "flac",
	M4A_4: "m4a",
	MID: "mid",
	MIDI: "midi",
	WVE:"wve",
}

const audioType = {
	MPEG: "audio/mpeg",
	WAVE: "audio/wave",
	WAV: "audio/wav",
	MP3: "audio/mp3",
	AAC: "audio/vnd.dlna.adts",
	WMA: "audio/x-ms-wma",
	AU: "audio/basic",
	AIFF: "audio/aiff",
	AMR: "audio/amr",
	OGA: "audio/oga",
	M4A: "audio/x-m4a",
	M4A_4: "audio/mp4",
	OGG: "audio/ogg",
	WEBA: "audio/weba",
	WEBM: "audio/webm",
	FLAC: "audio/flac",
	MID: "audio/mid",
	MIDI: "audio/x-midi",

};

const videoExtensions = {
	MP4: "mp4",
	MJPEG: "mjpeg",
	MPEG: "mpg",
	MOV: "mov",
	X_MSVIDEO: "x-msvideo",
	AVI: "avi",
	WEBM: "webm",
	FLV: "flv",
	MXF: "mxf",
	QT: "qt",
	WEB: "web",
	VID: "vid",
}

const videoType = {
	MP4: "video/mp4",
	MJPEG: "video/mjpeg",
	MPEG: "video/mpeg",
	MOV: "video/mov",
	QT: "video/quicktime",
	X_MSVIDEO: "video/x-msvideo",
	AVI: "video/avi",
	FLV: "video/flv",
	MXF: "application/mxf",
	A_OS: "application/octet-stream",
	WEBM: "video/webm",
	WEB: "video/web",
};

const documentExtensions = {
	DOC: "doc",
	DOCX: "docx",
	PDF: "pdf",
	XLS: "xls",
	XLSX: "xlsx",
	PPT: "ppt",
	PPTX: "pptx",
	TXT: "txt",
	HWP: "hwp",
	// HTML: "html",
	// HTM: "htm",
}

const documentType = {
	DOC1: "application/msword",
	DOC2: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	PDF: "application/pdf",
	EXCEL1: "application/vnd.ms-excel",
	EXCEL2: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	PPT1: "application/vnd.ms-powerpoint",
	PPT2: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
	TEXT: "text/plain",
	HWP : "application/x-hwp"
	// HTML: "text/html",
};

const modelExtensions = {
	STL:"stl",
	OBJ:"obj",
	FBX:"fbx",
	GLB:"glb",
	GLTF:"gltf",
}
const modelType = {
	STL:"application/sla",
	OBJ:"application/octet-stream",
	FBX:"application/octet-stream",
	GLB:"model/gltf+json",
	GLTF:"model/gltf+json",
}
const optionImageFormat = [
	// =================================IMAGE===================================================
	{ name: "PNG", value: mimeType.PNG, extension: imageExtensions.PNG },
	{ name: "JPG", value: mimeType.JPG ?? mimeType.JPEG, extension: imageExtensions.JPG },
	{ name: "JPEG", value: mimeType.JPEG, extension: imageExtensions.JPEG },
	{ name: "GIF", value: mimeType.GIF, extension: imageExtensions.GIF },
	{ name: "WEBP", value: mimeType.WEBP, extension: imageExtensions.WEBP },
	{ name: "SVG", value: mimeType.SVG ?? mimeType.SVG_XML, extension: imageExtensions.SVG ?? imageExtensions.SVG_XML },
	{ name: "AVIF", value: mimeType.AVIF, extension: imageExtensions.AVIF },
	{ name: "TIFF", value: mimeType.TIFF, extension: imageExtensions.TIFF },
	{ name: "JFIF", value: mimeType.JFIF, extension: imageExtensions.JFIF },
	{ name: "JFI", value: mimeType.JFI, extension: imageExtensions.JFI },
	{ name: "BMP", value: mimeType.BMP, extension: imageExtensions.BMP },
	{ name: "ICO", value: mimeType.ICO, extension: imageExtensions.ICO },
	{ name: "PNM", value: mimeType.PNM, extension: imageExtensions.PNM },
	{ name: "PBM", value: mimeType.PBM, extension: imageExtensions.PBM },
	{ name: "IEF", value: mimeType.IEF, extension: imageExtensions.IEF },
	{ name: "NEF", value: mimeType.NEF, extension: imageExtensions.NEF },
	{ name: "CR2", value: mimeType.CR2, extension: imageExtensions.CR2 },
	{ name: "ORF", value: mimeType.ORF, extension: imageExtensions.ORF },
	{ name: "ARW", value: mimeType.ARW, extension: imageExtensions.ARW },
	{ name: "PEF", value: mimeType.PEF, extension: imageExtensions.PEF },
	{ name: "RAF", value: mimeType.RAF, extension: imageExtensions.RAF },
	{ name: "PCD", value: mimeType.PCD, extension: imageExtensions.PCD },
	{ name: "CUR", value: mimeType.CUR, extension: imageExtensions.CUR },
	{ name: "DNG", value: mimeType.DNG, extension: imageExtensions.DNG },
	{ name: "DDS", value: mimeType.DDS, extension: imageExtensions.DDS },
	{ name: "HDR", value: mimeType.HDR, extension: imageExtensions.HDR },
	{ name: "RW2", value: mimeType.RW2, extension: imageExtensions.RW2 },
	{ name: "NRW", value: mimeType.NRW, extension: imageExtensions.NRW },
	{ name: "XCF", value: mimeType.XCF, extension: imageExtensions.XCF },
	{ name: "HEIC", value: mimeType.HEIC, extension: imageExtensions.HEIC },
	{ name: "HEIF", value: mimeType.HEIF, extension: imageExtensions.HEIF },
	// =================================AUDIO===================================================
	{ name: "MPEG", value: audioType.MPEG, extension: audioExtensions.MPEG },
	{ name: "WAVE", value: audioType.WAVE, extension: audioExtensions.WAVE },
	{ name: "WAV", value: audioType.WAV, extension: audioExtensions.WAV },
	{ name: "MP3", value: audioType.MP3 ?? audioType.MPEG, extension: audioExtensions.MP3 },
	{ name: "AAC", value: audioType.AAC, extension: audioExtensions.AAC },
	{ name: "WMA", value: audioType.WMA, extension: audioExtensions.WMA },
	{ name: "AU", value: audioType.AU, extension: audioExtensions.AU },
	{ name: "AIFF", value: audioType.AIFF, extension: audioExtensions.AIFF },
	{ name: "AMR", value: audioType.AMR, extension: audioExtensions.AMR },
	{ name: "OGA", value: audioType.OGA, extension: audioExtensions.OGA },
	{ name: "M4A", value: audioType.M4A ?? audioType.M4A_4, extension: audioExtensions.M4A ?? audioExtensions.M4A_4 },
	{ name: "OGG", value: audioType.OGG, extension: audioExtensions.OGG },
	{ name: "WEBA", value: audioType.WEBA, extension: audioExtensions.WEBA },
	{ name: "WEBM", value: audioType.WEBM, extension: audioExtensions.WEBM },
	{ name: "FLAC", value: audioType.FLAC, extension: audioExtensions.FLAC },
	{ name: "MID", value: audioType.MID ?? audioType.MIDI, extension: audioExtensions.MID ?? audioExtensions.MIDI },
	// =================================VIDEO===================================================
	{ name: "MP4", value: videoType.MP4, extension: videoExtensions.MP4 },
	{ name: "MJPEG", value: videoType.MJPEG, extension: videoExtensions.MJPEG },
	{ name: "MPEG", value: videoType.MPEG, extension: videoExtensions.MPEG },
	{ name: "MOV", value: videoType.MOV ?? videoType.QT  , extension: videoExtensions.MOV},
	{ name: "FLV", value: videoType.FLV ?? videoType.A_OS, extension: videoExtensions.FLV },
	{ name: "AVI", value: videoType.AVI ?? videoType.X_MSVIDEO, extension: videoExtensions.AVI ?? videoExtensions.X_MSVIDEO },
	{ name: "MXF", value: videoType.MXF ?? videoType.A_OS, extension: videoExtensions.MXF },
	{ name: "WEBM", value: videoType.WEBM ?? videoType.WEB, extension: videoExtensions.WEBM },
	// =================================DOCUMENT===================================================
	{ name: "PDF", value: documentType.PDF, extension: documentExtensions.PDF },
	{ name: "DOC", value: documentType.DOC1 ?? documentType.DOC2, extension: documentExtensions.DOC ?? documentExtensions.DOCX },
	{ name: "XLS", value: documentType.EXCEL1 ?? documentType.EXCEL2, extension: documentExtensions.XLS ?? documentExtensions.XLSX },
	{ name: "PPT", value: documentType.PPT1 ?? documentType.PPT2, extension: documentExtensions.PPT ?? documentExtensions.PPTX },
	{ name: "TXT", value: documentType.TEXT, extension: documentExtensions.TXT },
	{ name: "HWP", value: documentType.HWP, extension: documentExtensions.HWP},
];

const mediaType = [
	{ name: "Video", value: "1" },
	{ name: "Image", value: "2" },
	{ name: "Audio", value: "3" },
	{ name: "Documment", value: "4" },
	{ name: "3D Model", value: "5" },
];

const optionStatus = [
	{ name: "completed", value: "completed" },
	{ name: "failed", value: "failed" },
];

const dateFormat = {
	DDMMYYYY: "dd/mm/yyyy",
	MMDDYYYY: "mm/dd/yyyy",
	YYYYMMDD: "yyyy-mm-dd",
};

const timelineFormat = {
	year: {
		YYYY: "YYYY",
		year_YYYY: "year_YYYY", // default
		YYYY_year: "YYYY_year",
	},
	month: {
		MM: "MM",
		mmm: "mmm",
		MMM: "MMM",
		mmmm: "mmmm",
		month_MM: "month_MM", // default
		MM_month: "MM_month",
	},
	day: {
		DD: "DD",
		day_DD: "day_DD", // default
		DD_day: "DD_day",
	},
};

const maxSizeImage = 200 * 1000000; // 200 MB
const maxSizeVideo = 4000 * 1000000; // 4 GB
const maxSizeAudio = 4000 * 1000000; // 4 GB
const maxSizeDocument = 500 * 1000000; // 500 MB
const maxSizeModel = 500 * 1000000; // 500 MB
const maxSizeOther = 500 * 1000000; // 500 MB
const maxTimeAudio = 300000;
const userPermission = {
	view: 1,
	update: 2,
	clone: 4,
	delete: 8,
	destroy: 16,
	restore: 32,
	create: 64,
};

const permissionType = {
	CONTENT_LOOK_UP: 1,
	CONTENT_UPLOAD: 2,
	CONTENT_DOWNLOAD_ORIGINAL_FILES: 4,
	CONTENT_DOWNLOAD_MEZZANINE_FILES: 8,
	CONTENT_EDIT_METADATA: 16,
	CONTENT_DELETION_REQUEST: 32,
	CATEGORY_CREATE: 64,
	CATEGORY_MODIFY: 128,
	CATEGORY_MOVE: 256,
	CATEGORY_DELETION_REQUEST: 512,
	COMMUNITY_CREATE: 1024,
	ADMIN_PAGE_ACCESS: 2048,
};

const colCustom = {
	thumbnail: "thumbnail",
	title: "title",
	resolution: "resolution",
	size: "size",
	created_at: "created_at",
	updated_at: "updated_at",
	// tags: 'tags',
};

// setting for layout render:
// these width height will be used for default audio file in ImageLayout.
const defaultWidth = 250;
const defaultHeight = 250;
const targetRowHeight = 220;
const targetRowHeightList_desktop = 70;
const targetRowHeightList_mobile = 52;
const defaultLabelHeight = 50;
const targetSquareSize_desktop = 220;
const extraAreaScan = 500; // px
const ratioMasonry = [2, 1]; // ratio 2:1

// setting for list api asset:
const defaultPerPage = 100;
const defaultCategoryId = 1; // null || 1
const sortColumns = ["producedAt", "title", "createdAt"];
// filter:
// high: > 1920, medium: 512 ~ 1920, low: 0 ~ 512
const qualityFilter = [1920, 512, 0]; 
// timeline/none-timeline mode default
// 0: face mode, 1: has timeline mode, 2: no timeline mode
const defaultAssetDisplayMode = 2; 
// 0: manssonry, 1: grid, 2: list
const defaultActiveLayout = 0; 

// ['thumbnail', 'title', 'resolution', 'size','created_at', 'updated_at']
export {
	VERSION,
	API_LEAFLET,
	API_ROOT_V2,
	API_ROOT_UPLOAD,
	API_ROOT,
	API_SOCKET,
	apiName,
	audioType,
	documentType,
	colCustom,
	color,
	dateFormat,
	defaultActiveLayout,
	defaultAssetDisplayMode,
	defaultCategoryId,
	defaultHeight,
	defaultLabelHeight,
	defaultPerPage,
	defaultWidth,
	detectorType,
	enableDragFolder,
	expireCookies,
	extension,
	extraAreaScan,
	faceDetector,
	KEY_CAPCHA_SITE,
	mapTiles,
	maxSizeAudio,
	maxSizeImage,
	maxSizeOther,
	maxSizeDocument,
	maxSizeModel,
	maxSizeVideo,
	maxTimeAudio,
	mediaType,
	mimeType,
	optionImageFormat,
	optionStatus,
	permissionType,
	qualityFilter,
	ratioMasonry,
	sortColumns,
	storageType,
	storageTypeConstant,
	targetRowHeight,
	targetRowHeightList_desktop,
	targetRowHeightList_mobile,
	targetSquareSize_desktop,
	timelineFormat,
	typeReducer,
	userPermission,
	userType,
	videoType,
	videoExtensions,
	imageExtensions,
	audioExtensions,
	documentExtensions,
	modelExtensions,
};
