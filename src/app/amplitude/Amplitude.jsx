import React, { Fragment, useEffect } from 'react';
import isEmpty from 'lodash-es/isEmpty';

import { init, trackEvent, trackUserProperties } from './duck';

const Amplitude = ({ event = {}, userProps = {}, disableTrackEvent = false, disableTrackUserProps = false }) => {
    useEffect(() => {
        init();
    }, []);

    if (!disableTrackUserProps) {
        useEffect(() => {
            trackUserProperties(userProps);
        }, [userProps]);
    }

    if (!disableTrackEvent) {
        useEffect(() => {
            if (isEmpty(event)) {
                return;
            }

            trackEvent(event.name, event.props);
        }, [event.name]);
    }
    return (<Fragment/>);
};

export default Amplitude;
