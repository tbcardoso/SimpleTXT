export const FileSchema = {
	name: 'File',
	primaryKey: 'path',
	properties: {
		path: 'string',
		lastOpened: 'date',
	}
};
