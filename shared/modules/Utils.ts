/* eslint-disable no-param-reassign */
import { Alert, Dimensions, Linking, PermissionsAndroid, PixelRatio, Platform } from 'react-native';
import { DocumentDirectoryPath, readFile } from 'react-native-fs';
import I18n from '../I18n/I18n';

/**
 * @param reviewsSummary
 * @returns {string}
 * @about weighted average where you weigh each rating with the number of votes
 * {sum of(each rating * it's number of votes) / sum of (number of votes)}
 */
const averageOfReviews = (reviewsSummary: { [x: string]: string }) => {
	let reviewsCount = 0;
	let starsCount = 0;
	Object.keys(reviewsSummary).map((stars) => {
		reviewsCount += parseFloat(reviewsSummary[stars]);
		starsCount += parseFloat(stars) * parseFloat(reviewsSummary[stars]);
		return stars;
	});
	return reviewsCount ? parseFloat(parseFloat(String(starsCount / reviewsCount)).toFixed(2)) : 0;
};

const countReviews = (reviewsSummary: { [x: string]: string }) => {
	let count = 0;
	Object.keys(reviewsSummary).map((stars) => {
		count += parseFloat(reviewsSummary[stars]);
		return stars;
	});
	return parseFloat(String(count)).toFixed(0);
};

const { width: SCREEN_WIDTH } = Dimensions.get('window');
// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

const responsiveFont = (size: number) => {
	const newSize = size * scale;
	if (Platform.OS === 'ios') {
		return Math.round(PixelRatio.roundToNearestPixel(newSize));
	}
	return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

const postableImage = (image: { uri: any }) => {
	try {
		const path = image.uri;
		const fileName = path.split('/').pop();
		const fileType = fileName.split('.').pop();
		return {
			uri: path,
			name: fileName,
			type: `image/${fileType}`
		};
	} catch (e) {
		return {};
	}
};

const antiDuplication = (items: any[], uniqueKey: string | number) => {
	const uniq = {};
	return items.filter((item) => {
		// eslint-disable-next-line no-return-assign
		return !uniq[item[uniqueKey]] && (uniq[item[uniqueKey]] = true);
	});
};

const parseToInt = (param: any) => {
	if (!param) {
		return 0;
	}
	if (typeof param === 'string') {
		return parseInt(param, 10);
	}
	return param;
};
const groupObjectByKey = (objectData: any[], groupBy: string | number) => {
	return objectData.reduce((result, data) => {
		// eslint-disable-next-line no-param-reassign
		result[data[groupBy]] = result[data[groupBy]] || [];
		result[data[groupBy]].push(data);
		return result;
	}, Object.create(null));
};

const makeSectionListFormat = (dataArrayOfObjects: any[], labelKey: string | number) => {
	const formattedObject = dataArrayOfObjects.reduce((result, data) => {
		result[data[labelKey]] = result[data[labelKey]] || { data: [], key: '' };
		result[data[labelKey]].data.push(data);
		result[data[labelKey]].key = data[labelKey];
		return result;
	}, Object.create(null));
	return Object.keys(formattedObject).map((key) => {
		return formattedObject[key];
	});
};

const geographicalDistance = (
	lat1: number,
	lon1: number,
	lat2: number,
	lon2: number,
	unit = 'K'
) => {
	if (lat1 === lat2 && lon1 === lon2) {
		return 0;
	}

	const radlat1 = (Math.PI * lat1) / 180;
	const radlat2 = (Math.PI * lat2) / 180;
	const theta = lon1 - lon2;
	const radtheta = (Math.PI * theta) / 180;
	let dist =
		Math.sin(radlat1) * Math.sin(radlat2) +
		Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	if (dist > 1) {
		dist = 1;
	}
	dist = Math.acos(dist);
	dist = (dist * 180) / Math.PI;
	dist = dist * 60 * 1.1515;
	if (unit === 'K') {
		dist *= 1.609344;
	}
	if (unit === 'N') {
		dist *= 0.8684;
	}
	return Math.floor(dist * 100) / 100;
};

const makeRandomIdentifier = (length: number) => {
	const result: string[] = [];
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i += 1) {
		result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
	}
	return result.join('');
};

const audioPermission = async () => {
	if (Platform.OS !== 'android') {
		return Promise.resolve(true);
	}
	let result;
	try {
		result = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO);
	} catch (error) {
		return Promise.reject(error);
	}
	return result === PermissionsAndroid.RESULTS.GRANTED;
};

const fileToBuffer = (inputFile: string, type = 'base64') => {
	return new Promise((resolve, reject) => {
		readFile(inputFile, { encoding: type })
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(error);
			});
	});
};

const getBasePath = () => {
	const basePath = DocumentDirectoryPath;
	return Platform.OS === 'android' ? `file://${basePath}` : basePath;
};

const stringFormat = (phrase: string, ...args: any[]) => {
	return phrase
		.split('%s%')
		.reduce((aggregate, chunk, i) => aggregate + chunk + (args[i] || ''), '');
};

const arrayToObject = (arr: any[]) => {
	const obj = {};
	if (Array.isArray(arr) && arr.length) {
		arr.map((row) => {
			// eslint-disable-next-line prefer-destructuring
			obj[row[0]] = row[1] ?? '';
			return true;
		});
	}
	return obj;
};

const capitalizeFirstLetter = (str: string) => {
	return str.length ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

const sortObjectByDateKey = (param: any[], key: string | number) => {
	return param.sort((a, b) => new Date(a[key]).getTime() - new Date(b[key]).getTime());
};

const sortObjectByKey = (param: any[], key: string | number) => {
	if (param && Array.isArray(param) && param.length) {
		return param.sort((a, b) => a[key] - b[key]);
	}
	return [];
};
const randomColor = () => {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, '0')}`;
};
const roundToTwo = (num: any) => {
	return +`${Math.round(Number(`${num}e+2`))}e-2`;
};

const toFixedTwo = (num: any) => {
	const rounded = +`${Math.round(Number(`${num}e+2`))}e-2`;
	if (rounded) {
		return rounded.toString();
	}
	return '0.00';
};
const callPhone = (phone: any) => {
	const url = `tel:${phone}`;
	Linking.canOpenURL(url)
		.then((supported) => {
			if (supported) {
				Linking.openURL(url);
			} else {
				Alert.alert(I18n.t('error'), I18n.t('phone_url_opening_error'));
			}
		})
		.catch(() => {
			Alert.alert(I18n.t('error'), I18n.t('phone_url_opening_error'));
		});
};
export default {
	averageOfReviews,
	countReviews,
	responsiveFont,
	postableImage,
	groupObjectByKey,
	geographicalDistance,
	makeRandomIdentifier,
	audioPermission,
	fileToBuffer,
	getBasePath,
	parseToInt,
	antiDuplication,
	stringFormat,
	makeSectionListFormat,
	arrayToObject,
	capitalizeFirstLetter,
	sortObjectByDateKey,
	sortObjectByKey,
	roundToTwo,
	toFixedTwo,
	callPhone,
	randomColor
};
