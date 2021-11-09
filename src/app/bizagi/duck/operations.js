import find from 'lodash-es/find';
import qs from 'qs';

import { selectors as creditGoalSelectors } from '~/app/credit-goal/duck';
import { selectors as quizSelectors } from '~/app/quiz/duck';
import { forms } from '~/app/quiz/duck';
import utils from '~/app/common/utils';
import { metricaUser } from '~/app/common';
import { REST } from './rest';

const IS_ALREADY_SEND_STEP_ONE_KEY = 'IsAlreadySendStepOne';

export const sendStepOne = () => async (dispatch, getState) => {
    try {
        if (localStorage.getItem(IS_ALREADY_SEND_STEP_ONE_KEY)) {
            return;
        }

        const state = getState();

        const form = state.form[forms.QUIZ_FORM].values;

        const data = {
            stage: 1,
            clientId: form.phoneNumber.replace(/\D/g, ''),
            startDate: state.bizagi.startDate,
            creditGoal: creditGoalSelectors.getCreditGoalText(quizSelectors.getCurrentCreditGoal()),
            landing: 'ManiMani',
            email: form.email,
            applicationSum: form.loanAmount,
            monthlyPayment: utils.getLoanMothlyPay(form.loanAmount, 1, 10.9),
            education: find(state.init.data.education, {code: form.education}).name,
            income: form.salaryLevel,
            phoneNumber: form.phoneNumber.replace(/\D/g, ''),
            birthday: form.birthDate,
            middleName: form.middleName,
            lastName: form.lastName,
            firstName: form.firstName,
            address: form.homeAddress.value,
            gender: find(state.init.data.gender, {code: form.gender}).name,
            regLink: `http://manimani.ru/quiz/${quizSelectors.getCurrentCreditGoal()}?${qs.stringify({
                fid: metricaUser.getID(),
            })}`,
            utm: localStorage.getItem('utm_source'),
        };

        await REST.stepOne(data);

        localStorage.setItem(IS_ALREADY_SEND_STEP_ONE_KEY, '1');
    } catch (e) {}
};
