import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    bizagiStartDate: ['startDate'],
});

export { Creators, Types };
