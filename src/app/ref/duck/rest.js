import qs from 'qs';

export default {
    async save() {
        const params = qs.parse(window.location.search, {
            ignoreQueryPrefix: true
        });

        return fetch(`${GATEWAY_URL}/api/v1/landing/ref`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            }
        });
    }
};
