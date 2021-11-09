import React from 'react';
import PropTypes from 'prop-types';

import AnswerInputWrapper from './AnswerInputWrapper';

const AnswerInputField = ({ className, maskProps = {}, placeholder = '', input, quizSetFieldPasted, ...props }) => (
    <AnswerInputWrapper
        className={className}
        input={input}
        {...props}
    >
        <input
            placeholder={placeholder}
            onPaste={() => quizSetFieldPasted(input.name, true)}
            {...input}
        />
    </AnswerInputWrapper>
);

AnswerInputField.propTypes = {
    className: PropTypes.string,
    maskProps: PropTypes.object,
    placeholder: PropTypes.string,
    input: PropTypes.object.isRequired
};

export default AnswerInputField;
