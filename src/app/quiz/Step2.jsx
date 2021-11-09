import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';

import { formFields, decorators, constants } from '~/app/quiz/duck';
import { StepContainer, AnswerButtonField } from '~/app/quiz/core';
import { moneyFormatter } from '~/app/common/formatters';
import { utils } from '~/app/common';

let Step2 = ({ onSubmit, handleSubmit, loanAmount, ...props }) => (
    <form onSubmit={handleSubmit}>
        <StepContainer
            title='Укажите сумму ежемесячного платежа'
            onSubmit={onSubmit}
            formName={constants.FORM_NAME}
            {...props}
        >
            <Field
                name={formFields.LOAN_DURATION}
                component={AnswerButtonField}
                text={`${moneyFormatter.formatMoney(utils.getLoanMothlyPay(loanAmount, 1, 10.9))} (1 год)`}
                buttonValue={1}
                flex={[ '1 0 100%', '1 0 48%' ]}
                mr={[ '0px', '11px', '5px' ]}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.LOAN_DURATION}
                component={AnswerButtonField}
                text={`${moneyFormatter.formatMoney(utils.getLoanMothlyPay(loanAmount, 2, 10.9))} (2 года)`}
                buttonValue={2}
                flex={[ '1 0 100%', '1 0 48%' ]}
                mt={[ '12px', '0px' ]}
                ml={[ '0px', '11px', '5px' ]}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.LOAN_DURATION}
                component={AnswerButtonField}
                text={`${moneyFormatter.formatMoney(utils.getLoanMothlyPay(loanAmount, 3, 10.9))} (3 года)`}
                buttonValue={3}
                flex={[ '1 0 100%', '1 0 48%' ]}
                mt={[ '12px', '19px' ]}
                mr={[ '0px', '11px', '5px' ]}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.LOAN_DURATION}
                component={AnswerButtonField}
                text={`${moneyFormatter.formatMoney(utils.getLoanMothlyPay(loanAmount, 5, 10.9))} (5 лет)`}
                buttonValue={5}
                flex={[ '1 0 100%', '1 0 48%' ]}
                mt={[ '12px', '19px' ]}
                ml={[ '0px', '11px', '5px' ]}
                validate={[
                    required()
                ]}
            />
        </StepContainer>
    </form>
);

Step2.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

Step2 = decorators.step()(Step2);

export default Step2;
