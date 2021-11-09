import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const initialState = {
    errors: {},
};

const amplitudeFormErrors = (state = initialState, action) => ({
    ...state,
    errors: action.errors,
});

export const handlers = {
    [Types.AMPLITUDE_FORM_ERRORS]: amplitudeFormErrors,
};

export default createReducer(initialState, handlers);
