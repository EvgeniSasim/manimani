import * as Cookies from 'js-cookie';

import { UNIQUE_TOKEN } from './matcher';

export const serviceWorkerCreate = () => {
    window.pushParams = {
        parameters: {
            client_id: Cookies.get(UNIQUE_TOKEN),
        }
    };

    const pushScript = document.createElement('script');

    pushScript.src = 'https://push.cfv4.com/landing/push.js?' + new Date().getTime();

    document.head.appendChild(pushScript);
};
