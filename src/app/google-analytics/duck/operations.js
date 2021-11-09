import { REST } from './rest';

const IS_ALREADY_SEND = 'IsAlreadyGoogleAnalyticsSend';

export const sendAnalytics = () => async () => {
    try {
        if (localStorage.getItem(IS_ALREADY_SEND)) {
            return;
        }

        await REST.sendAnalytics();

        localStorage.setItem(IS_ALREADY_SEND, '1');
    } catch (e) {}
};
