import uuidv4 from 'uuid/v4';
import md5 from 'js-md5';

const generateId = () => md5(uuidv4());

export default {
    generateId
};
