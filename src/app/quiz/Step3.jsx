import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';

import { formFields, decorators, constants } from '~/app/quiz/duck';
import { StepContainer, AnswerButtonField } from '~/app/quiz/core';
import { moneyFormatter } from '~/app/common/formatters';

let Step3 = ({ onSubmit, handleSubmit, loanAmount, ...props }) => (
    <form onSubmit={handleSubmit}>
        <StepContainer
            title='Укажите уровень вашей заработной платы'
            onSubmit={onSubmit}
            formName={constants.FORM_NAME}
            {...props}
        >
            <Field
                name={formFields.SALARY_LEVEL}
                component={AnswerButtonField}
                text={`менее ${moneyFormatter.formatMoney(25000)}`}
                buttonValue={25000}
                flex={[ '1 0 100%', '1 0 48%' ]}
                mr={[ '0px', '11px', '5px' ]}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.SALARY_LEVEL}
                component={AnswerButtonField}
                text={`от ${moneyFormatter.formatMoney(25000)} до ${moneyFormatter.formatMoney(50000)}`}
                buttonValue={50000}
                flex={[ '1 0 100%', '1 0 48%' ]}
                mt={[ '12px', '0px' ]}
                ml={[ '0px', '11px', '5px' ]}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.SALARY_LEVEL}
                component={AnswerButtonField}
                text={`от ${moneyFormatter.formatMoney(50000)} до ${moneyFormatter.formatMoney(80000)}`}
                buttonValue={80000}
                flex={[ '1 0 100%', '1 0 48%' ]}
                mt={[ '12px', '19px' ]}
                mr={[ '0px', '11px', '5px' ]}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.SALARY_LEVEL}
                component={AnswerButtonField}
                text={`более ${moneyFormatter.formatMoney(80000)}`}
                buttonValue={100000}
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

Step3.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

Step3 = decorators.step()(Step3);

export default Step3;
