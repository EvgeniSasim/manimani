import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';

import { formFields, decorators, constants } from '~/app/quiz/duck';
import { StepContainer, AnswerButtonField, AnswerInputMaskField } from '~/app/quiz/core';
import { masks, parsers } from '~/app/common/input-mask';
import { moneyFormatter } from '~/app/common/formatters';

let Step1 = ({ onSubmit, handleSubmit, ...props }) => (
    <form onSubmit={handleSubmit}>
        <StepContainer
            title='Укажите желаемую сумму'
            onSubmit={onSubmit}
            formName={constants.FORM_NAME}
            {...props}
        >
            <Field
                name={formFields.SUM}
                component={AnswerButtonField}
                text={moneyFormatter.formatMoney(100000)}
                buttonValue={100000}
                width='100%'
                flex={['1 0 100%', '1 0 48%']}
                mr={['0px', '11px', '5px']}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.SUM}
                component={AnswerButtonField}
                text={moneyFormatter.formatMoney(200000)}
                buttonValue={200000}
                width='100%'
                flex={['1 0 100%', '1 0 48%']}
                ml={['0px', '11px', '5px']}
                mt={['12px', '0px']}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.SUM}
                component={AnswerButtonField}
                text={moneyFormatter.formatMoney(500000)}
                buttonValue={500000}
                width='100%'
                flex={['1 0 100%', '1 0 48%']}
                mt={['12px', '19px']}
                mr={['0px', '11px', '5px']}
                validate={[
                    required()
                ]}
            />
            <Field
                name={formFields.SUM}
                component={AnswerInputMaskField}
                withoutValidation={true}
                isActiveCallback={value => value !== 100000 && value !== 200000 && value !== 500000}
                maskProps={{
                    mask: masks.rubles
                }}
                parse={parsers.getNumbers}
                placeholder='Введите сумму'
                type='tel'
                width='100%'
                flex={['1 0 100%', '1 0 48%']}
                mt={['12px', '19px']}
                ml={['0px', '11px', '5px']}
                validate={[
                    required(),
                ]}
            />
        </StepContainer>
    </form>
);

Step1.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

Step1 = decorators.step()(Step1);

export default Step1;
