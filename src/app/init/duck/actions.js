import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    initSetFetchingStatus: ['status'],
    initSetData: ['data']
});

export { Creators, Types };
