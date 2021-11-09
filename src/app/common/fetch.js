import defaultsDeep from 'lodash-es/defaultsDeep';

import metricaUser from './metricaUser';
import userSessionTokenManager from './userSessionTokenManager';

export default (url, options) => {
    const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'X-Metrica-User-ID': metricaUser.getID(),
        'x-session-token': userSessionTokenManager.get(),
    };

    return fetch(GATEWAY_URL + url, defaultsDeep(options, {
        headers: headers
    }));
};
