const arrCheckAllValue = (arr, valueCheck) => {
	return arr.every((v) => v === valueCheck);
};

const validateEmail = (email) => {
	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(String(email.trim()).toLowerCase())) {
		return "incorrect-email";
	}
	return "ok";
};

const validateEmpty = (str) => {
	if (str.trim().length == 0) {
		return "empty";
	}
	return "ok";
};

const validateAllLowercase = (str) => {
	if (str.trim() !== str.trim().toLowerCase()) {
		return "incorrect";
	}
	return "ok";
};

const validateLengthSpace = (str, min, max) => {
	if (
		str.trim().length < min ||
		str.trim().length > max ||
		/\s/.test(str.trim())
	) {
		return "incorrect";
	}
	return "ok";
};

const validateLength = (str, min, max) => {
	if (str.trim().length < min || str.trim().length > max) {
		return "incorrect";
	}
	return "ok";
};

const validate1Space = (str) => {
	const reg = /^(\w+\s?)*\s*$/;
	if (reg.test(str)) {
		return str.replace(/\s+$/, "");
	}

	return "incorrect";
};

const isValidPassword = (password) => {
	let hasError1 = false;
	let hasError2 = false;
	let hasError3 = false;

	if (
		/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[0-9a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{3,}$/.test(
			password
		)
	) {
		if (password.trim().length < 8 || password.trim().length > 64)
			hasError1 = true; // 8~64자 이내로 입력하세요.
	} else {
		if (password.trim().length < 8 || password.trim().length > 64)
			hasError2 = true; // 8~64자 이내, 영문·숫자·특수문자를 조합해 입력하세요.
		else hasError3 = true; // 영문, 숫자, 특수문자를 조합하여 입력하세요.
	}

	return {
		hasError1,
		hasError2,
		hasError3,
	};
};

const checkContainSpecialCharacters = (str) => {
	if (/^[a-zA-Z0-9- ]*$/.test(str) == false) {
		return "contain";
	}
	return "not-contain";
};

const validateNumber = (str) => {
	if (/^\d+$/.test(str.toString().trim())) {
		return "ok";
	}
	return "incorrect";
};

const validateName = (str) => {
	if (str.trim().length < 1 || str.trim().length > 64) {
		return "incorrect";
	}
	return "ok";
};

const bytesToSize = (bytes, hasSpace = true) => {
	if (bytes === null) return 0;
	var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
	if (bytes == 0) return "0 Byte";
	var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return (
		Math.round((bytes * 100) / Math.pow(1024, i), 2) / 100 +
		(hasSpace ? " " : "") +
		sizes[i]
	);
};

const bytesToMB = (bytes) => {
	if (bytes == 0) return "0";
	return Math.round(bytes / Math.pow(1024, 2), 2);
};

const megabyteToBytes = (mb) => {
	return parseInt(mb) * 1024 * 1024;
};
const bytesyteToMegab = (bytes) => {
	return (parseInt(bytes) / (1024 * 1024 * 1024)).toFixed(2);
};
const stripNonNumeric = (str) => {
	return str.replace(/\D/g, "");
};

const checkValidDate = (date) => {
	let d = new Date(date);
	if (isNaN(d.getTime())) {
		return "invalid-date";
	}
	return "ok";
};

const simpleNumber = (input) => {
	var value = Math.abs(input);

	if (value >= 1000000000) {
		return (
			(
				Math.sign(input) * (Math.abs(input) / 1000000000).toFixed(1)
			).toLocaleString() + "B"
		);
	} else if (value >= 1000000) {
		return (
			(
				Math.sign(input) * (Math.abs(input) / 1000000).toFixed(1)
			).toLocaleString() + "M"
		);
	} else if (value >= 1000) {
		return Math.sign(input) * (Math.abs(input) / 1000).toFixed(1) + "K";
	}

	return Math.sign(input) * Math.abs(input);
};

const commaNumber = (x) => {
	if (!x) return "0";
	let result = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	if (result.length > 0) return result;
	return "0";
};

const getCurrentDate = () => {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, "0");
	var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	var yyyy = today.getFullYear();
	var hr = String(today.getHours()).padStart(2, "0");
	var min = String(today.getMinutes()).padStart(2, "0");
	var sec = String(today.getSeconds()).padStart(2, "0");

	return { dd, mm, yyyy, hr, min, sec };
};

const getMonthFullWord = (month) => {
	let languages = store.getState().languages;
	switch (parseInt(month)) {
		case 1:
			return languages.general.month_1;
		case 2:
			return languages.general.month_2;
		case 3:
			return languages.general.month_3;
		case 4:
			return languages.general.month_4;
		case 5:
			return languages.general.month_5;
		case 6:
			return languages.general.month_6;
		case 7:
			return languages.general.month_7;
		case 8:
			return languages.general.month_8;
		case 9:
			return languages.general.month_9;
		case 10:
			return languages.general.month_10;
		case 11:
			return languages.general.month_11;
		case 12:
			return languages.general.month_12;
	}
};

const getMonthSimpleWord = (type, month, language) => {
	// type = mmm || MMM;
	if (language === "ko") {
		switch (parseInt(month)) {
			case 1:
				return type === "mmm" ? "1월" : "1월";
			case 2:
				return type === "mmm" ? "2월" : "2월";
			case 3:
				return type === "mmm" ? "3월" : "3월";
			case 4:
				return type === "mmm" ? "4월" : "4월";
			case 5:
				return type === "mmm" ? "5월" : "5월";
			case 6:
				return type === "mmm" ? "6월" : "6월";
			case 7:
				return type === "mmm" ? "7월" : "7월";
			case 8:
				return type === "mmm" ? "8월" : "8월";
			case 9:
				return type === "mmm" ? "9월" : "9월";
			case 10:
				return type === "mmm" ? "10월" : "10월";
			case 11:
				return type === "mmm" ? "11월" : "11월";
			case 12:
				return type === "mmm" ? "12월" : "12월";
		}
	} else {
		switch (parseInt(month)) {
			case 1:
				return type === "mmm" ? "Jan" : "JAN";
			case 2:
				return type === "mmm" ? "Feb" : "FEB";
			case 3:
				return type === "mmm" ? "Mar" : "MAR";
			case 4:
				return type === "mmm" ? "Apr" : "APR";
			case 5:
				return type === "mmm" ? "May" : "MAY";
			case 6:
				return type === "mmm" ? "Jun" : "JUN";
			case 7:
				return type === "mmm" ? "Jul" : "JUL";
			case 8:
				return type === "mmm" ? "Aug" : "AUG";
			case 9:
				return type === "mmm" ? "Sep" : "SEP";
			case 10:
				return type === "mmm" ? "Oct" : "OCT";
			case 11:
				return type === "mmm" ? "Nov" : "NOV";
			case 12:
				return type === "mmm" ? "Dec" : "DEC";
		}
	}
};
// program to convert decimal to binary
const convertToBinary = (x) => {
	let bin = 0;
	let rem,
		i = 1,
		step = 1;
	while (x != 0) {
		rem = x % 2;
		x = parseInt(x / 2);
		bin = bin + rem * i;
		i = i * 10;
	}
	return bin;
};

const detectFileType = (e) => {
	const extension = e.name.split(".").pop().toLowerCase();
	if (Object.values(imageExtensions).includes(extension)) {
		return "image";
	} else if (Object.values(audioExtensions).includes(extension)) {
		return "audio";
	} else if (Object.values(videoExtensions).includes(extension)) {
		return "video";
	} else if (Object.values(documentExtensions).includes(extension)) {
		return "document";
	} else if (Object.values(modelExtensions).includes(extension)) {
		return "model";
	} else {
		return "application";
	}
};

const isJsonString = (str) => {
	if (!str) return false;
	return /^[\],:{}\s]*$/.test(
		str
			.replace(/\\["\\\/bfnrtu]/g, "@")
			.replace(
				/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				"]"
			)
			.replace(/(?:^|:|,)(?:\s*\[)+/g, "")
	);
};

/**
 * ASCII to Unicode (decode Base64 to original data)
 * @param {string} b64
 * @return {string}
 */
function atou(b64) {
	return decodeURIComponent(escape(atob(b64)));
}

/**
 * Unicode to ASCII (encode data to Base64)
 * @param {string} data
 * @return {string}
 */
function utoa(data) {
	return btoa(unescape(encodeURIComponent(data)));
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
	var p = 0.017453292519943295; // Math.PI / 180
	var c = Math.cos;
	var a =
		0.5 -
		c((lat2 - lat1) * p) / 2 +
		(c(lat1 * p) * c(lat2 * p) * (1 - c((lon2 - lon1) * p))) / 2;

	return 12742 * Math.asin(Math.sqrt(a)); // 2 * R; R = 6371 km
}

function debounce(func, timeout = 1000) {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(this, args);
		}, timeout);
	};
}

const secToHHMMSS = (seconds, format) => {
	let result = new Date(seconds * 1000).toISOString().substr(11, 8);
	if (format === "HHMMSS") return result;
	if (seconds >= 3600) return result;
	return result.slice(3);
};
const secToHHMMSS_ms = (seconds, format) => {
	let result = new Date(seconds * 1000).toISOString().substr(11, 12);
	if (format === "HHMMSS") return result;
	if (seconds >= 3600) return result;
	return result.slice(3);
};

function HHMMSStoSeconds(str) {
	var p = str.split(":"),
		s = 0,
		m = 1;

	while (p.length > 0) {
		s += m * parseFloat(p.pop(), 10).toFixed(3);
		m *= 60;
	}

	return s;
}

const easeInOutQuad = (t) => {
	return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

const scrollTo = (element, to, duration, onDone) => {
	// animate scroll in seconds
	var start = element.scrollTop,
		change = to - start,
		startTime = performance.now(),
		now,
		elapsed,
		t;

	function animateScroll() {
		now = performance.now();
		elapsed = (now - startTime) / 1000;
		t = elapsed / duration;

		element.scrollTop = start + change * easeInOutQuad(t);

		if (t < 1) window.requestAnimationFrame(animateScroll);
		else onDone && onDone();
	}

	animateScroll();
};

function secondsConvertTime(d) {
	d = Number(d);
	var h = Math.floor(d / 3600);
	var m = Math.floor((d % 3600) / 60);
	var s = Math.floor((d % 3600) % 60);

	if (h < 0) h = 0;
	if (m < 0) m = 0;
	if (s < 0) s = 0;

	var hDisplay = h + (h == 1 ? " hour, " : " hours, ");
	var mDisplay = m + (m == 1 ? " minute, " : " minutes, ");
	var sDisplay = s + (s == 1 ? " second" : " seconds");
	return { hour: h, minute: m, second: s, hDisplay, mDisplay, sDisplay };
}

const showRemainingTime = (seconds) => {
	if (seconds == null || seconds == undefined) return "";
	if (seconds <= 60)
		return remainingTimeInSec(secondsConvertTime(seconds).second);
	else if (seconds > 60 && seconds <= 3600)
		return remainingTimeInMin(secondsConvertTime(seconds).minute);
	else return remainingTimeInHour(secondsConvertTime(seconds).hour);
};

const remainingTimeInSec = (time) => {
	switch (store.getState().languages.language_code) {
		case "en":
			return renderElement(`{value} seconds left`, time);
		case "vn":
			return renderElement(`Còn lại {value} giây`, time);
		case "ko":
			return renderElement(`{value}초 남았습니다`, time);
	}
};

const remainingTimeInMin = (time) => {
	switch (store.getState().languages.language_code) {
		case "en":
			return renderElement(`{value} minutes left`, time);
		case "vn":
			return renderElement(`Còn lại {value} phút`, time);
		case "ko":
			return renderElement(`{value}분 남았습니다`, time);
	}
};

const remainingTimeInHour = (time) => {
	switch (store.getState().languages.language_code) {
		case "en":
			return renderElement(`{value} hours left`, time);
		case "vn":
			return renderElement(`Còn lại {value} giờ`, time);
		case "ko":
			return renderElement(`{value}시간 남았습니다`, time);
	}
};

const checkFileType = (file) => {
	if (file) {
		let type = file["type"].split("/")[0];
		if (type === "image" || type === "audio" || type === "video") return true;
		// if (type === "image") return true;
		else return true;
	} else return false;
};

const renderYearFormat = (year) => {
	const languages = store.getState().languages;
	const infoProfile = store.getState().infoProfile;
	if (infoProfile) {
		switch (infoProfile.yearFormat) {
			case timelineFormat.year.YYYY:
				return year;
			case timelineFormat.year.year_YYYY:
				return languages.general.year + " " + year;
			case timelineFormat.year.YYYY_year:
				return year + languages.general.year;
			default:
				return languages.general.year + " " + year;
		}
	} else return null;
};

const renderMonthFormat = (month) => {
	const languages = store.getState().languages;
	const infoProfile = store.getState().infoProfile;

	if (infoProfile) {
		let m = month < 10 ? "0" + month : month;
		switch (infoProfile.monthFormat) {
			case timelineFormat.month.MM:
				return m;
			case timelineFormat.month.mmm:
				return getMonthSimpleWord("mmm", month);
			case timelineFormat.month.MMM:
				return getMonthSimpleWord("MMM", month);
			case timelineFormat.month.mmmm:
				return getMonthFullWord(month);
			case timelineFormat.month.month_MM:
				return languages.general.month + " " + m;
			case timelineFormat.month.MM_month:
				return m + languages.general.month;
			default:
				return languages.general.month + " " + m;
		}
	} else return null;
};

const renderDayFormat = (day) => {
	const languages = store.getState().languages;
	const infoProfile = store.getState().infoProfile;

	if (infoProfile) {
		let d = day < 10 ? "0" + day : day;
		switch (infoProfile.dayFormat) {
			case timelineFormat.day.DD:
				return d;
			case timelineFormat.day.DD_day:
				return d + languages.general.day;
			case timelineFormat.day.day_DD:
				return languages.general.day + " " + d;
			default:
				return languages.general.day + " " + d;
		}
	} else return null;
};

const isInCommunity = () => {
	const pathName = window?.location?.pathname || "";
	if (
		pathName.includes("community") ||
		pathName.includes("my-community") ||
		pathName.includes("com-cat") ||
		pathName.includes("community-settings")
	) {
		return true;
	}
	return false;
};

const removeExtensionName = (title) => {
	if (!title) return "";
	return title.replace(/.[\w]+$/g, "");
};

const getNumberFromString = (string) =>
	string.split(/ /)[0].replace(/[^\d]/g, "");
const checkPermission = (userPermissionValue, permissionValue) => {
	if ((userPermissionValue & permissionValue) == permissionValue) {
		return true;
	} else {
		return false;
	}
};
const addAttributePageAndIndexToAsset = (listImages) => {
	listImages.data.map((x, i) => {
		//TODO: Add page of asset
		if (!x.page) {
			x.page = listImages.pages.current;
		}
		//TODO: Add index of asset
		if (!x.index) {
			x.index = (x.page - 1) * 100 + (i % 100);
		}
	});
	listImages.data.sort((a, b) => a.index - b.index);
	return listImages;
};

const updatePageAndIndexForAsset = (listImages) => {
	return listImages.map((x, i) => {
		if (x.page) {
			x.index = (x.page - 1) * 100 + (i % 100);
		}
		return x;
	});
};

const progressStatus = {
	progressing: "PROGRESSING",
	error: "ERROR",
	finished: "FINISHED",
	not_init: "NOT_INIT",
};

const checkProgress = (view, item) => {
	// 1 : home , 2 view detail
	const isProgressing =
		(item.progress > 0 && item.progress < 100) ||
		(item.progressProxy > 0 && item.progressProxy < 100);
	const isError =
		item.progressMezzanine === -1 ||
		item.progressMezzanine === null ||
		item.progressProxy === -1 ||
		item.progressProxy === null;
	switch (view) {
		case 1:
			if (isProgressing) {
				return progressStatus.progressing;
			}
			if (item.progressThumb === -1) {
				return progressStatus.error;
			}
			return progressStatus.finished;
		case 2:
			if (isProgressing) {
				return progressStatus.progressing;
			}
			if (isError) {
				if (
					item.type === 2 &&
					(item.progressProxy === -1 || item.progressProxy === null)
				) {
					return progressStatus.error;
				} else {
					if (
						item.type === 2 &&
						(item.progressMezzanine === -1 || item.progressMezzanine === null)
					) {
						return progressStatus.not_init;
					} else {
						return progressStatus.error;
					}
				}
			}
			if (item.progressThumb !== 100) {
				if (item.type === 4) {
					return progressStatus.progressing;
				} else {
					return progressStatus.finished;
				}
			}
			return progressStatus.finished;

		default:
			return null;
	}
};

const checkHasFilter = (filterImageList) => {
	let checkEmptyMimetypes = false;
	if (!(filterImageList.mimetype || filterImageList?.extension?.length > 0))
		checkEmptyMimetypes = true;
	if (Array.isArray(filterImageList.mimetype)) {
		if (filterImageList.mimetype.length === 0) checkEmptyMimetypes = true;
	}
	if (
		!filterImageList.aspect &&
		checkEmptyMimetypes &&
		!filterImageList.quality &&
		(!filterImageList.size || filterImageList.size?.length <= 0) &&
		!filterImageList?.timeline?.length
	) {
		return false;
	} else {
		return true;
	}
};
const checkDownloadContentType = (str , optionsDownload) => {
	if (/image|video/.test(str) && !(/document|model/.test(str)) && !(/audio/.test(str))) {
		return optionsDownload;
	} else if (/audio/.test(str) && !(/document|model/.test(str))) {
		return optionsDownload.filter((item) => item.id !== 2);
	} else if (/document|model/.test(str)) {
		return optionsDownload.filter((item) => item.id !== 2  && item.id !== 3);
	} else {
		return optionsDownload;
	}
}
export {
	validateEmpty,
	validateAllLowercase,
	validateEmail,
	validateLengthSpace,
	validateNumber,
	validateName,
	validate1Space,
	isValidPassword,
	arrCheckAllValue,
	bytesToSize,
	bytesToMB,
	validateLength,
	stripNonNumeric,
	megabyteToBytes,
	bytesyteToMegab,
	checkContainSpecialCharacters,
	checkValidDate,
	getMonthFullWord,
	getMonthSimpleWord,
	convertToBinary,
	getCurrentDate,
	isJsonString,
	atou,
	utoa,
	getDistanceFromLatLonInKm,
	debounce,
	secToHHMMSS,
	secToHHMMSS_ms,
	HHMMSStoSeconds,
	scrollTo,
	simpleNumber,
	commaNumber,
	detectFileType,
	showRemainingTime,
	secondsConvertTime,
	checkFileType,
	renderYearFormat,
	renderMonthFormat,
	renderDayFormat,
	isInCommunity,
	removeExtensionName,
	getNumberFromString,
	checkPermission,
	addAttributePageAndIndexToAsset,
	updatePageAndIndexForAsset,
	checkProgress,
	checkHasFilter,
	checkDownloadContentType,
};
