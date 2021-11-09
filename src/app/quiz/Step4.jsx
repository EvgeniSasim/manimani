import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { required } from 'redux-form-validators';
import map from 'lodash-es/map';

import { formFields, decorators, constants } from '~/app/quiz/duck';
import { StepContainer, AnswerButtonField } from '~/app/quiz/core';

let Step4 = ({ onSubmit, handleSubmit, loanAmount, educationDictionary, ...props }) => (
    <form onSubmit={handleSubmit}>
        <StepContainer
            title='Укажите ваше образование'
            onSubmit={onSubmit}
            formName={constants.FORM_NAME}
            {...props}
        >
            {map(educationDictionary, (education, index) => (
                <Field
                    name={formFields.EDUCATION}
                    component={AnswerButtonField}
                    text={education.name}
                    buttonValue={education.code}
                    flex={[ '1 0 100%', '1 0 48%' ]}
                    mr={index % 2 === 0 ? [ '0px', '11px', '5px' ] : '0px'}
                    ml={index % 2 === 1 ? [ '0px', '11px', '5px' ] : '0px'}
                    mt={index === 1 ? [ '12px', '0px' ] : index > 1 ? [ '12px', '19px' ] : '0px'}
                    validate={[
                        required()
                    ]}
                />
            ))}
        </StepContainer>
    </form>
);

Step4.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    educationDictionary: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string
        })
    )
};

Step4 = decorators.step()(Step4);

export default Step4;
