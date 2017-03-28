/* eslint-env jest */

let fs = {};

function readFile(directoryPath) {
	return 'Lorem ipsum.';
}

fs.readFile = readFile;

export default {
	fs,
};
