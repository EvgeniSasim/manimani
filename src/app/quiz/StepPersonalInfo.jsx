import React, { Component } from 'react';
import { injectProps } from 'react-decoration';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import {required, acceptance} from 'redux-form-validators';
import { Element } from 'react-scroll';

import { namePart, phoneNumber } from '~/app/common/validators';
import { formFields, decorators, constants, mobilePhoneCheckStatuses } from './duck';
import { StepContainer, AnswerInputMaskField, AnswerDadataField, AnswerCheckboxField } from '~/app/quiz/core';
import { masks } from '~/app/common/input-mask';
import CheckMobilePhoneModalContainer from './CheckMobilePhoneModalContainer';

const ShowOfferText = styled.span`
    text-decoration: underline;
    cursor: help;
`;

const ElementStyled = styled(Element)`
    width: 100%;
`;

class StepPersonalInfo extends Component {
    static propTypes = {
        title: PropTypes.string,
        onSubmit: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.onGoingToNextStep = this.onGoingToNextStep.bind(this);
    }

    @injectProps
    async onGoingToNextStep({ checkMobilePhoneExists, phoneNumber, showCheckMobilePhoneModal }) {
        const status = await checkMobilePhoneExists(phoneNumber);

        if (status === mobilePhoneCheckStatuses.EXISTS) {
            showCheckMobilePhoneModal(phoneNumber);
        }

        return status === mobilePhoneCheckStatuses.NOT_EXISTS
            || status === mobilePhoneCheckStatuses.FAILED;
    }

    @injectProps
    render({ title, onSubmit, handleSubmit, showOfferModal, ...props }) {
        return (
            <form onSubmit={handleSubmit}>
                <StepContainer
                    title='Личные данные'
                    subtitle='Укажите достоверные контактные данные, это повлияет на одобрение кредита'
                    onSubmit={onSubmit}
                    isSmallAnswersBlock={true}
                    formName={constants.FORM_NAME}
                    {...props}
                >
                    <ElementStyled
                        name={formFields.FIRST_NAME}
                    >
                        <Field
                            name={formFields.FIRST_NAME}
                            component={AnswerDadataField}
                            service='fio'
                            specialRequestOptions={{
                                parts: ['NAME']
                            }}
                            placeholder='Имя'
                            width='100%'
                            validate={[
                                required(),
                                namePart()
                            ]}
                        />
                    </ElementStyled>
                    <Field
                        name={formFields.PHONE_NUMBER}
                        component={AnswerInputMaskField}
                        maskProps={{
                            mask: masks.phoneNumber,
                            type: 'tel'
                        }}
                        placeholder='+7 (___) __-__-__'
                        mt={[ '30px', '25px' ]}
                        width='100%'
                        validate={[
                            required(),
                            phoneNumber()
                        ]}
                    />
                    <Field
                        name='processingConfirmed'
                        component={AnswerCheckboxField}
                        mt={[ '30px', '25px' ]}
                        validate={[
                            acceptance()
                        ]}
                    >
                        Согласен на передачу персональных данных <ShowOfferText onClick={() => showOfferModal()}>?</ShowOfferText>
                    </Field>
                </StepContainer>
                <CheckMobilePhoneModalContainer />
            </form>
        );
    }
}

export default decorators.step()(StepPersonalInfo);
