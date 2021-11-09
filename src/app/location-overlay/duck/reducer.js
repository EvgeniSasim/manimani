import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const initialState = {
    isShown: false,
    selectedRegion: {
        fiasID: '0c5b2444-70a0-4932-980c-b4dc0d3f02b5',
        title: 'г. Москва'
    }
};

export const toggleOverlay = (state = initialState, action) => ({
    ...state,
    isShown: action.needToBeShown
});

export const locationOverlaySelectRegion = (state = initialState, action) => ({
    ...state,
    selectedRegion: {
        ...state.selectedRegion,
        title: action.title,
        fiasID: action.fiasID
    }
});

export const handlers = {
    [Types.TOGGLE_OVERLAY]: toggleOverlay,
    [Types.LOCATION_OVERLAY_SELECT_REGION]: locationOverlaySelectRegion
};

export default createReducer(initialState, handlers);
