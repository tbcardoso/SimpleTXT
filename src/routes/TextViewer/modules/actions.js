/*
 * action types
 */

export const SELECT_FILE_SUCCESS = 'SELECT_FILE_SUCCESS'



/*
 * action creators
 */

export function selectFileSuccess(filePath) {
  return { type: SELECT_FILE_SUCCESS, filePath }
}