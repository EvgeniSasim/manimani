import { createReducer } from 'reduxsauce';

import { Types } from './actions';
import constants from './constants';

const initialState = {
    moneyCount: constants.DEFAULT_MONEY_COUNT
};

export const descriptionSetMoneyCount = (state = initialState, action) => ({
    ...state,
    moneyCount: action.moneyCount
});

export const handlers = {
    [Types.DESCRIPTION_SET_MONEY_COUNT]: descriptionSetMoneyCount
};

export default createReducer(initialState, handlers);
