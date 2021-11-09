import uuidv4 from 'uuid/v4';

const storageKey = 'MetricaUserID';

const generateID = () => {
    localStorage.setItem(storageKey, uuidv4());
};

const getID = () => localStorage.getItem(storageKey);

const sendToMetrica = () => window.yaCounter45302445 && window.yaCounter45302445.setUserID(getID());

export default {
    generateID,
    getID,
    sendToMetrica
};
