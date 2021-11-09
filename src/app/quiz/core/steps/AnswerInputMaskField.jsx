import React from 'react';
import PropTypes from 'prop-types';
import TextMask from 'react-text-mask';
import isString from 'lodash-es/isString';
import isFinite from 'lodash-es/isFinite';

import AnswerInputWrapper from './AnswerInputWrapper';

const AnswerInputMaskField = ({
    className,
    maskProps = {},
    placeholder = '',
    input,
    type,
    quizSetFieldPasted,
    ...props
}) => (
    <AnswerInputWrapper
        className={className}
        input={input}
        {...props}
    >
        <TextMask
            placeholder={placeholder}
            {...maskProps}
            {...input}
            type={type}
            value={isString(input.value) || isFinite(input.value) ? input.value : ''}
            onPaste={() => quizSetFieldPasted(input.name, true)}
        />
    </AnswerInputWrapper>
);

AnswerInputMaskField.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    maskProps: PropTypes.object,
    placeholder: PropTypes.string,
    input: PropTypes.object.isRequired
};

export default AnswerInputMaskField;
