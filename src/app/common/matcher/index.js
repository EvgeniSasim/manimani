import uuidv4 from 'uuid/v4';
import * as Cookies from 'js-cookie';

export const UNIQUE_TOKEN = 'UserUniqueToken';

export const setCookie = () => {
    if (!Cookies.get(UNIQUE_TOKEN)) {
        Cookies.set(UNIQUE_TOKEN, uuidv4(), {
            domain: LANDING_DOMAIN,
            expires: 3650,
        });
    }
};
