import qs from 'qs';

export const REST = {
    sendAnalytics: () => {
        const queryParams = qs.parse(window.location.search, {
            ignoreQueryPrefix: true
        });

        if(!(queryParams.utm_source === 'kz') || !queryParams.ga_cid) {
            return;
        }

        const data = {
            v: 1,
            t: 'event',
            tid: 'UA-75434248-6',
            cid: queryParams.ga_cid,
            ec: 'form_send',
            ea: 'short',
        };

        const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');

        return fetch('https://www.google-analytics.com/collect', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody,
        })
    },
};
