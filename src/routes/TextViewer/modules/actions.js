/*
 * action types
 */

export const SELECT_FILE_SUCCESS = 'SELECT_FILE_SUCCESS'
export const LOAD_FILE_SUCCESS = 'LOAD_FILE_SUCCESS'



/*
 * action creators
 */

export function selectFileSuccess(filePath) {
  return { type: SELECT_FILE_SUCCESS, filePath }
}

export function loadFileSuccess(filePath, fileContent) {
  return { type: LOAD_FILE_SUCCESS, filePath, fileContent }
}