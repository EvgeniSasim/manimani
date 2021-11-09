import { createReducer } from 'reduxsauce';

import { Types } from './actions';

const initialState = {
    mobileMenuIsShown: false
};

export const toggleMobileMenu = (state = initialState, action) => ({
    ...state,
    mobileMenuIsShown: action.needToBeShown
});

export const handlers = {
    [Types.TOGGLE_MOBILE_MENU]: toggleMobileMenu
};

export default createReducer(initialState, handlers);
