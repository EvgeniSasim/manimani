import React from 'react';

import { QuizContainer as CoreQuizContainer } from '~/app/quiz/core';
import { selectors } from './duck';
import Step1 from './Step1';
import Step2Container from './Step2Container';
import Step3 from './Step3';
import Step4Container from './Step4Container';
import { StepPersonalInfo, StepContactsInfo, StepPassportInfo, StepSendCode, StepConfirmCode } from '~/app/quiz';
import { selectors as creditGoalSelectors } from '~/app/credit-goal/duck';
import { moneyFormatter } from '~/app/common/formatters';
import { formFields } from './duck';

const Quiz = ({ moneyCount, firstName, lastName }) => (
    <CoreQuizContainer
        commonInfoOptions={{
            elements: [
                {
                    title: 'ЦЕЛЬ КРЕДИТА',
                    value: creditGoalSelectors.getCreditGoalText(selectors.getCurrentCreditGoal())
                },
                {
                    title: 'СУММА',
                    value: moneyFormatter.formatMoney(moneyCount)
                },
                {
                    title: 'ИМЯ',
                    value: firstName,
                    activeStep: {
                        step: 2,
                        innerStep: 1
                    },
                    scrollTo: formFields.FIRST_NAME
                },
                {
                    title: 'ФАМИЛИЯ',
                    value: lastName,
                    activeStep: {
                        step: 2,
                        innerStep: 2
                    },
                    scrollTo: formFields.LAST_NAME
                }
            ]
        }}
        steps={[
            //[ Step1, Step2Container, Step3, Step4Container ],
            [ StepPersonalInfo, StepContactsInfo, StepPassportInfo, StepSendCode ],
            [ StepConfirmCode ]
        ]}
    />
);

export default Quiz;
