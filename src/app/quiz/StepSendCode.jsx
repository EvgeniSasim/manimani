import React, { Component } from 'react';
import { injectProps } from 'react-decoration';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';
import qs from 'qs';

import { phoneNumber } from '~/app/common/validators';
import {formFields, decorators, constants, mobilePhoneCheckStatuses} from './duck';
import { StepContainer, AnswerInputMaskField } from '~/app/quiz/core';
import { masks } from '~/app/common/input-mask';

class StepPersonalInfo extends Component {
    static propTypes = {
        title: PropTypes.string,
        onSubmit: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    @injectProps
    onGoingToNextStep({ mobilePhoneExistanceStatus, phoneNumber }) {
        if (mobilePhoneExistanceStatus === mobilePhoneCheckStatuses.EXISTS) {
            window.location.replace(ACCOUNT_URL + '/login?' + qs.stringify({ mobilePhone: phoneNumber }));
        }

        return mobilePhoneExistanceStatus === mobilePhoneCheckStatuses.NOT_EXISTS
            || mobilePhoneExistanceStatus === mobilePhoneCheckStatuses.FAILED;
    }

    @injectProps
    render({ title, onSubmit, handleSubmit, sendConfirmationCode, ...props }) {
        return (
            <form onSubmit={handleSubmit(sendConfirmationCode)}>
                <StepContainer
                    title='Подтверждение телефона'
                    subtitle='Одноразовый пароль будет выслан Вам на указанный номер'
                    onSubmit={onSubmit}
                    isSmallAnswersBlock={true}
                    formName={constants.FORM_NAME}
                    {...props}
                >
                    <Field
                        name={formFields.PHONE_NUMBER}
                        component={AnswerInputMaskField}
                        maskProps={{
                            mask: masks.phoneNumber,
                            type: 'tel',
                            showMask: true
                        }}
                        mt={['30px', '25px']}
                        type="tel"
                        width='100%'
                        validate={[
                            required(),
                            phoneNumber()
                        ]}
                    />
                </StepContainer>
            </form>
        );
    }
}

export default decorators.step()(StepPersonalInfo);
