import has from 'lodash-es/has';

import creditGoals from './credit-goals';

const creditGoalTextMapping = {
    [creditGoals.JUST_MONEY]: 'Просто деньги',
    [creditGoals.REFINANCING_LOAN]: 'Рефинансирование кредита',
    [creditGoals.REPAIRING]: 'Ремонт',
    [creditGoals.MORTGAGE]: 'Покупка дома или квартиры',
    [creditGoals.REFINANCING_MORTGAGE]: 'Рефинансирование ипотеки',
    [creditGoals.AUTO_LOAN]: 'Покупка автомобиля'
};

const getCreditGoalText = creditGoal => has(creditGoalTextMapping, creditGoal) ? creditGoalTextMapping[creditGoal] : null;

export default {
    getCreditGoalText
};
