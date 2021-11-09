import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    updateSelectedCreditGoal: ['creditGoal']
});

export { Creators, Types };
