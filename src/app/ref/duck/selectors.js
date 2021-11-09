import rest from './rest';

const localStorageRefIdKey = 'refId2';

const saveRefParams = async () => {
    if (localStorage.getItem(localStorageRefIdKey)) {
        return;
    }

    try {
        const response = await rest.save();

        const responseJSON = await response.json();

        localStorage.setItem(localStorageRefIdKey, responseJSON.id);
    } catch(e) {}
};

const getRefId = () => localStorage.getItem(localStorageRefIdKey);

export default {
    saveRefParams,
    getRefId
};
