import amplitude from 'amplitude-js';
import qs from 'qs';
import isEmpty from 'lodash-es/isEmpty';

export const saveUtmSource = () => {
    const params = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    });

    if (params.utm_source) {
        localStorage.setItem(
            'utm_source',
            params.utm_source === LEADGID_UTM_SOURCE && params.wm_id ? params.utm_source + params.wm_id : params.utm_source
        );
    }
};

export const init = () => {
    saveUtmSource();

    amplitude.init(AMPLITUDE_API_KEY, null, {includeReferrer: true});
};

export const trackEvent = (event, props = {}) => {
    amplitude.logEvent(event, props);
};

export const trackUserProperties = (props) => {
    if (isEmpty(props)) {
        return;
    }

    if (props.utm_source && localStorage.getItem('utm_source')) {
        props['utm_source'] = localStorage.getItem('utm_source');
    }

    if (props.utm_source && !localStorage.getItem('utm_source')) {
        delete props.utm_source;
    }

    amplitude.setUserProperties(props);
};
