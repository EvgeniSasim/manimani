import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const initialState = {
    event: {},
    userProps: {},
};
const amplitudeEvent = (state = initialState, action) => ({
    ...state,
    event: action.event,
});

const amplitudeUserProps = (state = initialState, action) => ({
    ...state,
    userProps: action.userProps,
});

export const handlers = {
    [Types.AMPLITUDE_EVENT]: amplitudeEvent,
    [Types.AMPLITUDE_USER_PROPS]: amplitudeUserProps,
};

export default createReducer(initialState, handlers);
