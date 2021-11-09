import React, { useEffect, Fragment } from 'react';
import isEmpty from 'lodash-es/isEmpty';

import { selectors } from './duck';

const AmplitudeQuizErrors = ({
    event,
    errors,
    activeFields,
    setEvent,
}) => {
    useEffect(() => {
        if (isEmpty(errors)) {
            return;
        }

        const formValidState = selectors.getFieldsStateByFieldsAndErrors(activeFields, errors);

        setEvent({
            name: event,
            props: formValidState,
        });
    }, [errors]);
    
    return (<Fragment/>);
};

export default AmplitudeQuizErrors;
