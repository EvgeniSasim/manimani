import React from 'react';
import { Field } from 'redux-form';
import { required, date } from 'redux-form-validators';
import styled from 'styled-components';

import { passportSeries, passportNumber, passportDate, passportCode } from '~/app/common/validators';
import { formFields, decorators, constants, selectors } from './duck';
import { StepContainer, AnswerInputMaskField, AnswerInputField } from '~/app/quiz/core';
import { masks, parsers } from '~/app/common/input-mask';

let StepPassportInfo = ({
    title,
    onSubmit,
    handleSubmit,
    setPassportIssued,
    sendAnalytics,
    ...props,
}) => {
    React.useEffect(() => {
        sendAnalytics();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <StepContainer
                title='Паспортные данные'
                subtitle='Укажите достоверные данные, это повлияет на одобрение кредита'
                onSubmit={onSubmit}
                isSmallAnswersBlock={true}
                formName={constants.FORM_NAME}
                {...props}
            >
                <Field
                    name={formFields.PASSPORT_SERIES}
                    component={AnswerInputMaskField}
                    maskProps={{
                        mask: masks.passportSeries,
                    }}
                    type="tel"
                    placeholder='Серия паспорта'
                    width='100%'
                    validate={[
                        required(),
                        passportSeries(),
                    ]}
                />
                <Field
                    name={formFields.PASSPORT_NUMBER}
                    component={AnswerInputMaskField}
                    maskProps={{
                        mask: masks.passportNumber,
                    }}
                    type="tel"
                    placeholder='Номер паспорта'
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        required(),
                        passportNumber(),
                    ]}
                />
                <Field
                    name={formFields.PASSPORT_UNIT_CODE}
                    component={AnswerInputMaskField}
                    maskProps={{
                        mask: masks.passportCode,
                    }}
                    type="tel"
                    placeholder='Код подразделения'
                    mt={['30px', '25px']}
                    width='100%'
                    parse={parsers.getDigits}
                    validate={[
                        required(),
                        passportCode(),
                    ]}
                    onChange={async e => parsers.getDigits(e.target.value).length === 6 && setPassportIssued(
                        await selectors.getPassportIssuedByUnitCode(e.target.value)
                    )}
                />
                <Field
                    name={formFields.PASSPORT_ISSUED}
                    component={AnswerInputField}
                    placeholder='Кем выдан'
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        required(),
                    ]}
                />
                <Field
                    name={formFields.PASSPORT_BIRTH_PLACE}
                    component={AnswerInputFieldStyled}
                    placeholder='Место рождения'
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        required(),
                    ]}
                />
                <Field
                    name={formFields.PASSPORT_ISSUED_DATE}
                    component={AnswerInputMaskField}
                    placeholder='Дата выдачи'
                    mt={['30px', '25px']}
                    width='100%'
                    maskProps={{
                        mask: masks.date,
                    }}
                    validate={[
                        required(),
                        passportDate(),
                        date({
                            format: 'dd.mm.yyyy',
                            msg: 'Ожидаемый формат: день.месяц.год',
                        }),
                    ]}
                    type="tel"
                    {...props}
                />
            </StepContainer>
        </form>
    );
}

StepPassportInfo = decorators.step()(StepPassportInfo);

const AnswerInputFieldStyled = styled(AnswerInputField)`
    input {
        box-sizing: border-box;
        padding-right: 5px;
    }
`;

export default StepPassportInfo;
