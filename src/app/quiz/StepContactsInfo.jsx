import React from 'react';
import { Field, change } from 'redux-form';
import {required, date, email} from 'redux-form-validators';
import isObject from 'lodash-es/isObject';
import { Element } from 'react-scroll';
import styled from 'styled-components';
import {get} from 'lodash-es';

import { namePart, phoneNumber, dadataHouse, dadataStreet, dadataCity } from '~/app/common/validators';
import { formFields, decorators, constants } from './duck';
import { StepContainer, AnswerInputMaskField, AnswerDadataField, InputMaleFemale } from '~/app/quiz/core';
import { masks } from '~/app/common/input-mask';

let StepContactsInfo = ({ title, onSubmit, handleSubmit, bizagiSendStepOne, formValues, ...props }) => {
    React.useEffect(() => () => {
        bizagiSendStepOne();
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <StepContainer
                title='Контактные данные'
                subtitle='Укажите достоверные данные, это повлияет на одобрение кредита'
                onSubmit={onSubmit}
                isSmallAnswersBlock={true}
                formName={constants.FORM_NAME}
                {...props}
            >
                <ElementStyled
                    name={formFields.LAST_NAME}
                >
                    <Field
                        name={formFields.LAST_NAME}
                        component={AnswerDadataField}
                        service='fio'
                        specialRequestOptions={{
                            parts: ['SURNAME'],
                        }}
                        placeholder='Фамилия'
                        width='100%'
                        validate={[
                            required(),
                            namePart(),
                        ]}
                    />
                </ElementStyled>
                <Field
                    name={formFields.FIRST_NAME}
                    component={AnswerDadataField}
                    service='fio'
                    mt={['30px', '25px']}
                    specialRequestOptions={{
                        parts: ['NAME'],
                    }}
                    placeholder='Имя'
                    width='100%'
                    validate={[
                        required(),
                        namePart(),
                    ]}
                />
                <Field
                    name={formFields.MIDDLE_NAME}
                    component={AnswerDadataField}
                    service='fio'
                    specialRequestOptions={{
                        parts: ['PATRONYMIC'],
                    }}
                    placeholder='Отчество'
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        namePart(),
                    ]}
                />
                <Field
                    name={formFields.EMAIL}
                    component={AnswerDadataField}
                    service='EMAIL'
                    placeholder='Электронная почта'
                    helpText='Пример: myemail@ya.ru'
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        required(),
                        email(),
                    ]}
                    normalize={ value => value.split(' ').join("") }
                />
                <Field
                    name={formFields.GENDER}
                    component={InputMaleFemale}
                    placeholder='Пол'
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        required(),
                    ]}
                />
                {/*<Field
                    name={formFields.LIVING_ADDRESS}
                    component={AnswerDadataField}
                    service='address'
                    placeholder='Адрес проживания'
                    mt={['30px', '25px']}
                    width='100%'
                    helpText='Начните вводить адрес, а затем выберете из списка..'
                    onSelectSuggestion={(sugg, input) => input.onChange(sugg)}
                    format={value => isObject(value) ? value.value : value}
                    validate={[
                        required(),
                        dadataHouse(),
                    ]}
                />*/}
                <Field
                    name={formFields.LIVING_CITY}
                    component={AnswerDadataField}
                    service='address'
                    specialRequestOptions={{"from_bound": { "value": "city" }, "to_bound": { "value": "settlement" }, "restrict_value": true,}}
                    placeholder='Город проживания'
                    mt={['30px', '25px']}
                    width='100%'
                    helpText='Начните вводить город(село/посёлок/деревня), а затем выберете из списка..'
                    onSelectSuggestion={(sugg, input) => input.onChange(sugg)}
                    onChange={()=>{ props.dispatch(change(constants.FORM_NAME, formFields.LIVING_ADDRESS, "" )); props.dispatch(change(constants.FORM_NAME, formFields.LIVING_STREET, "" )); }}
                    format={value => isObject(value) ? value.value : value}
                    validate={[
                        required(),
                        dadataCity()
                    ]}
                />
                { typeof get(formValues, "homeCity.data") === "object" ?
                    <Field
                        name={formFields.LIVING_STREET}
                        component={AnswerDadataField}
                        service='address'
                        specialRequestOptions={{
                            "locations": [{"settlement_fias_id": get(formValues, "homeCity.data.settlement_fias_id")}, {"city_fias_id": get(formValues, "homeCity.data.city_fias_id")}],
                            "from_bound": {"value": "street"},
                            "to_bound": {"value": "street"},
                            "restrict_value": true,
                        }}
                        placeholder='Улица проживания'
                        mt={['30px', '25px']}
                        width='100%'
                        helpText='Начните вводить название улицы, а затем выберете из списка..'
                        onSelectSuggestion={(sugg, input) => { input.onChange(sugg); }}
                        onChange={()=>{ props.dispatch(change(constants.FORM_NAME, formFields.LIVING_ADDRESS, "" )); }}
                        format={value => isObject(value) ? value.data.street_with_type : value}
                        validate={[
                            required(),
                            dadataStreet()
                        ]}
                    /> : <br />
                }
                { typeof get(formValues, "homeStreet.data") === "object" ?
                    <Field
                        name={formFields.LIVING_ADDRESS}
                        component={AnswerDadataField}
                        service='address'
                        specialRequestOptions={{
                            "from_bound": {"value": "house"},
                            "to_bound": {"value": "house"},
                            "restrict_value": true,
                            "locations": [{"street_fias_id": get(formValues, "homeStreet.data.street_fias_id")}]
                        }}
                        placeholder='Номер дома'
                        mt={['30px', '25px']}
                        width='100%'
                        helpText='Начните вводить номер дома, а затем выберете из списка..'
                        onSelectSuggestion={(sugg, input) => { input.onChange(sugg); }}
                        format={value => isObject(value) ? value.data.house_type + " " + value.data.house : value}
                        validate={[
                            required(),
                            dadataHouse(),
                        ]}
                    /> : <br />
                }
                <Field
                    name={formFields.BIRTH_DATE}
                    component={AnswerInputMaskField}
                    maskProps={{
                        mask: masks.date,
                    }}
                    placeholder='Дата рождения'
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        required(),
                        date({
                            format: 'dd.mm.yyyy',
                            msg: 'Ожидаемый формат: день.месяц.год',
                        }),
                        date({
                            format: 'dd.mm.yyyy',
                            '<=': () => {
                                const date = new Date();
                                return date.setFullYear(date.getFullYear() - 18);
                            },
                            msg: 'Вам должно быть от 18 лет',
                        }),
                        date({
                            format: 'dd.mm.yyyy',
                            '>=': () => {
                                const date = new Date();
                                return date.setFullYear(date.getFullYear() - 70);
                            },
                            msg: 'Вам должно быть до 70 лет',
                        }),
                    ]}
                />
                <Field
                    name={formFields.PHONE_NUMBER}
                    component={AnswerInputMaskField}
                    maskProps={{
                        mask: masks.phoneNumber,
                        type: 'tel',
                        showMask: true,
                    }}
                    mt={['30px', '25px']}
                    width='100%'
                    validate={[
                        required(),
                        phoneNumber(),
                    ]}
                />
            </StepContainer>
        </form>
    );
}

StepContactsInfo = decorators.step()(StepContactsInfo);

const ElementStyled = styled(Element)`
    width: 100%;
`;

export default StepContactsInfo;
