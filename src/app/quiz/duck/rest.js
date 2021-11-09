import qs from 'qs';

import { fetch } from '~/app/common';

const REST = {
    sendApplication: data => {
        return fetch('/api/v1/landing/application', {
            method: 'POST',
            body: JSON.stringify(data)
        });
    },
    sendConfirmationCode: phone => {
        return fetch('/api/v1/landing/confirmation/phone/code/send', {
            method: 'POST',
            body: JSON.stringify({
                mobilePhone: phone
            })
        });
    },
    confirmCode: (id, code) => {
        return fetch('/api/v1/landing/confirmation/phone/code/verify', {
            method: 'POST',
            body: JSON.stringify({
                id: id,
                code: code
            })
        });
    },
    updateData: (id, refId, data) => {
        return fetch('/api/v1/landing/landingFillings', {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                refId: refId,
                data: data
            })
        });
    },
    checkMobilePhoneExists: mobilePhone => {
        return fetch('/api/v1/landing/checker/exists?' + qs.stringify({
            mobilePhone: mobilePhone
        }));
    }
};

export default REST;
