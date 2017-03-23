/*
 * action types
 */

export const LOAD_STARTUP_FILE = 'LOAD_STARTUP_FILE';
export const SELECT_FILE_SUCCESS = 'SELECT_FILE_SUCCESS';
export const LOAD_FILE_SUCCESS = 'LOAD_FILE_SUCCESS';
export const LOAD_FILE_ERROR = 'LOAD_FILE_ERROR';
export const ABOUT_SCREEN_SELECTED = 'ABOUT_SCREEN_SELECTED';

/*
 * action creators
 */

export function loadStartupFile() {
	return { type: LOAD_STARTUP_FILE };
}

export function selectFileSuccess(filePath) {
	return { type: SELECT_FILE_SUCCESS, filePath };
}

export function loadFileSuccess(filePath, fileContent) {
	return { type: LOAD_FILE_SUCCESS, filePath, fileContent };
}

export function loadFileError(filePath, error) {
	return { type: LOAD_FILE_ERROR, filePath, error };
}

export function aboutScreenSelected() {
	return { type: ABOUT_SCREEN_SELECTED };
}
