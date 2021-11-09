import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';

import { formFields, decorators, constants } from './duck';
import { StepContainer, AnswerInputField } from '~/app/quiz/core';

let StepPersonalInfo = ({ title, onSubmit, handleSubmit, phone, confirmCode, ...props }) => (
    <form onSubmit={handleSubmit(confirmCode)}>
        <StepContainer
            title='Введите одноразовый пароль'
            subtitle='Одноразовый пароль'
            onSubmit={onSubmit}
            isSmallAnswersBlock={true}
            formName={constants.FORM_NAME}
            {...props}
        >
            <Field
                name={formFields.CONFIRMATION_CODE}
                component={AnswerInputField}
                mt={['30px', '25px']}
                width='100%'
                type="tel"
                dontShowSuccessValidationStatus
                validate={[
                    required()
                ]}
            />
        </StepContainer>
    </form>
);

StepPersonalInfo.propTypes = {
    title: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
};

StepPersonalInfo = decorators.step()(StepPersonalInfo);

export default StepPersonalInfo;
