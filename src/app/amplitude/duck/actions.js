import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    amplitudeEvent: ['event'],
    amplitudeUserProps: ['userProps'],
});

export { Creators, Types };
