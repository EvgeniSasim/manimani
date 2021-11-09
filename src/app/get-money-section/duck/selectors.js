import constants from './constants';

const calculatePreviousMoneyCountToReturn = moneyCount => moneyCount * constants.PREVIOUS_MONEY_COUNT_PERCENTAGE;

export default {
    calculatePreviousMoneyCountToReturn
};
