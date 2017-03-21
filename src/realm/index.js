import Realm from 'realm';
import * as schemas from './schemas';

export default new Realm({schema: Object.values(schemas)});

