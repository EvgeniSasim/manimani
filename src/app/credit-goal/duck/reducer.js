import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const initialState = {
    selectedCreditGoal: null
};

export const updateSelectedCreditGoal = (state = initialState, action) => ({
    ...state,
    selectedCreditGoal: action.creditGoal
});

export const handlers = {
    [Types.UPDATE_SELECTED_CREDIT_GOAL]: updateSelectedCreditGoal
};

export default createReducer(initialState, handlers);
