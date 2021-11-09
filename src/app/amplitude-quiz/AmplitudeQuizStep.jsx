import React, { useEffect, Fragment } from 'react';

const AmplitudeQuizStep = ({
    event,
    formValues,
    setEvent,
    setUserProps,
}) => {
    useEffect(() => {
        setUserProps({ ...formValues, utm_source: true });
        setEvent({
            name: event,
            props: {},
        });
    }, [event]);
    
    return (<Fragment/>);
};

export default AmplitudeQuizStep;
