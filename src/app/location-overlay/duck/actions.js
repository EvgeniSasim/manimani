import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    toggleOverlay: ['needToBeShown'],
    locationOverlaySelectRegion: ['title', 'fiasID']
});

export { Creators, Types };
