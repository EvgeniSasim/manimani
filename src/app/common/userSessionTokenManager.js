import uuidv4 from 'uuid/v4';

const KEY = 'UserSessionToken';

const generate = () => localStorage.setItem(KEY, uuidv4());

const get = () => localStorage.getItem(KEY);

export default {
    generate,
    get,
};
