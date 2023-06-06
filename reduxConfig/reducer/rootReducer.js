import { combineReducers } from 'redux';

import addModal from './configure/addModal';
import dictionaryList from './configure/dictionaryList';
import filterModal from './configure/filterModal';
import localeList from './configure/language';
import metadataList from './configure/metadataList';
import refreshListConfig from './configure/refreshListConfig';
import searchConfig from './configure/searchConfig';
import settingList from './configure/settingList';
import storageList from './configure/storageList';
import tabConfigure from './configure/tabConfigure';
import toggleMenu from './configure/toggleMenu';
import userList from './configure/userList';
import activeLayout from './dashboard/activeLayout';
import assetDisplayMode from './dashboard/assetDisplayMode';
import categoriesList from './dashboard/categoriesList';
import comments from './dashboard/comments';
import communities from './dashboard/communities';
import customCols from './dashboard/customCols';
import customTagModal from './dashboard/customTagModal';
import filterImageList from './dashboard/filterImageList';
import listAssetSlider from './dashboard/listAssetSlider';
import listFaces from './dashboard/listFaces';
import listFolders from './dashboard/listFolders';
import listImages from './dashboard/listImages';
import openCommentDetail from './dashboard/openCommentDetail';
import openInfoDetail from './dashboard/openInfoDetail';
import openSlider from './dashboard/openSlider';
import selectedAssets from './dashboard/selectedAssets';
import selectedFolders from './dashboard/selectedFolders';
import selectedItems from './dashboard/selectedItems';
import sortListBy from './dashboard/sortListBy';
import sortListGroup from './dashboard/sortListGroup';
import statusLayout from './dashboard/statusLayout';
import tabCategories from './dashboard/tabCategories';
import tagsList from './dashboard/tagsList';
import thumbnailImage from './dashboard/thumbnailImage';
import timeline from './dashboard/timeline';
import timelineBar from './dashboard/timelineBar';
import toggleSubFiles from './dashboard/toggleSubFiles';
import uploadData from './dashboard/uploadData';
import uploadModal from './dashboard/uploadModal';
import uploadProgress from './dashboard/uploadProgress';
import viewportStack from './dashboard/viewportStack';
import infoProfile from './profile/infoProfile';
import alertModal from './utilities/alertModal';
import appInfo from './utilities/appInfo';
import auth from './utilities/auth';
import contextMenu from './utilities/contextMenu';
import languages from './utilities/languages';
import loader from './utilities/loader';
import loaderAsset from './utilities/loaderAsset';
import loaderImageLayout from './utilities/loaderImageLayout';
import loaderNextPage from './utilities/loaderNextPage';
import loaderTheme from './utilities/loaderTheme';
import menuOptionMobile from './utilities/menuOptionMobile';
import pickingModal from './utilities/pickingModal';
import statusNoti from './utilities/statusNoti';
import theme from './utilities/theme';
import toastModal from './utilities/toastModal';
import verifyModal from './utilities/verifyModal';

let rootReducer = combineReducers({
	activeLayout,
	addModal,
	alertModal,
	appInfo,
	assetDisplayMode,
	auth,
	categoriesList,
	comments,
	communities,
	contextMenu,
	customCols,
	customTagModal,
	dictionaryList,
	filterImageList,
	filterModal,
	infoProfile,
	languages,
	listFaces,
	listFolders,
	listImages,
	listAssetSlider,
	loader,
	loaderAsset,
	loaderImageLayout,
	loaderNextPage,
	loaderTheme,
	localeList,
	menuOptionMobile,
	metadataList,
	openCommentDetail,
	openInfoDetail,
	pickingModal,
	refreshListConfig,
	searchConfig,
	selectedAssets,
	selectedFolders,
	selectedItems,
	settingList,
	sortListBy,
	sortListGroup,
	statusLayout,
	statusNoti,
	storageList,
	tabCategories,
	tabConfigure,
	tagsList,
	theme,
	thumbnailImage,
	timeline,
	timelineBar,
	toastModal,
	toggleMenu,
	toggleSubFiles,
	uploadData,
	uploadModal,
	uploadProgress,
	userList,
	verifyModal,
	viewportStack,
	openSlider
});

export default rootReducer;
