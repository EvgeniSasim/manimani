import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    descriptionSetMoneyCount: ['moneyCount']
});

export { Creators, Types };
