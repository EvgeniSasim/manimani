import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    amplitudeFormErrors: ['errors'],
});

export { Creators, Types };
