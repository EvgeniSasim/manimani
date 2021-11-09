import values from 'lodash-es/values';

import { creditGoals } from '~/app/credit-goal/duck';

const QUIZES = `/quiz/:creditGoal(${values(creditGoals).join('|')})`;

export default {
    QUIZES
};
