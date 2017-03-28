/* eslint-env jest */

let realm = function Realm() {
	this.objects = function () {
		return [
			{ path: 'path/to/file.txt' },
		];
	};
	this.write = function () { };
	this.delete = function () { };
	this.create = function () { };
};

export default realm;
