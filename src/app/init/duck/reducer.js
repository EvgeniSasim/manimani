import { createReducer } from 'reduxsauce';

import { Types } from './actions';
import fetchingStatuses from './fetching-statuses';

const initialState = {
    fetchingStatus: fetchingStatuses.NONE,
    data: {}
};

export const initSetFetchingStatus = (state = initialState, action) => ({
    ...state,
    fetchingStatus: action.status
});

export const initSetData = (state = initialState, action) => ({
    ...state,
    data: action.data
});

export const handlers = {
    [Types.INIT_SET_FETCHING_STATUS]: initSetFetchingStatus,
    [Types.INIT_SET_DATA]: initSetData
};

export default createReducer(initialState, handlers);
