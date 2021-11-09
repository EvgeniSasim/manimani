import moment from 'moment';

import constants from '../../amplitude-quiz/duck/constants';

export const getCohort = () => {
    const date = moment(Date.now());

    return {
        [constants.COHORT_DAY] : date.dayOfYear(),
        [constants.COHORT_WEEK] : date.weeks(),
        [constants.COHORT_MONTH] : date.month() + 1,
        [constants.COHORT_YEAR] : date.year(),
    };
};
