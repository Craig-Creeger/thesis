/**
 * All values are JSON stringified.
 */

export function getPonderboxKeys () {
	const storage = window.localStorage;
	const ponderKeys = [];
	for (let i = 0, j = storage.length; i < j; i++) {
		if (/^s\d+p\d+/.test(storage.key(i))) {
			ponderKeys.push(storage.key(i));
		}
	}
	ponderKeys.sort();
	return ponderKeys;
}

export function getForPage(storageId) {
	const storage = window.localStorage;
	const entries = [];
	for (let i = 0, j = storage.length; i < j; i++) {
		const regex = new RegExp(`^${storageId}_\\d`);
		const key = storage.key(i);
		if (regex.test(key)) {
			entries.push({ key, value: JSON.parse(storage.getItem(key)) });
		}
	}
	return entries;
}

export function addKey (key) {
	const keyArray = JSON.parse(window.localStorage.getItem('keyList'));
	if (!keyArray.find(elem => elem === key)) {
		keyArray.push(key);
		window.localStorage.setItem('keyList', JSON.stringify(keyArray));
	}
}

export function setItem(key, value) {
	addKey(key);
	window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem (key) {
	return JSON.parse(window.localStorage.getItem(key));
}

export function clear() {
	const keyArray = JSON.parse(window.localStorage.getItem('keyList')) || [];
	keyArray.forEach(key => {
		window.localStorage.removeItem(key);
	});
	window.localStorage.setItem('keyList', JSON.stringify([]));
}
