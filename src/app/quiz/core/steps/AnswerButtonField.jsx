import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AnswerButtonWrapper from './AnswerButtonWrapper';

const AnswerButtonWrapperStyled = styled(AnswerButtonWrapper)`
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
        color: #282828;
    }
`;

const AnswerButtonField = ({ className, text, buttonValue, input, meta, ...props }) => (
    <AnswerButtonWrapperStyled
        className={className}
        highlight={buttonValue === input.value}
        onClick={() => input.onChange(buttonValue)}
        {...props}
    >
        {text}
    </AnswerButtonWrapperStyled>
);

AnswerButtonField.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
    buttonValue: PropTypes.any.isRequired,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired
};

export default AnswerButtonField;
