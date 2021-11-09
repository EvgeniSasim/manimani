import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    toggleMobileMenu: ['needToBeShown']
});

export { Creators, Types };
