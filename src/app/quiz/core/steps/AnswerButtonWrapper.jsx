import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';

const Wrapper = styled(Box)`
    border-radius: 10px;
    border: 1px solid #e6e4e4;
    font-size: 18px;
    height: 51px;
    line-height: 54px;
    text-align: center;
`;

const AnswerButtonWrapper = ({ className, highlight = false, children, ...props }) => (
    <Wrapper
        is="button"
        className={className}
        bg={highlight ? '#ffffff' : 'transparent'}
        color={highlight ? '#282828' : '#ffffff'}
        {...props}
    >
        {children}
    </Wrapper>
);

AnswerButtonWrapper.propTypes = {
    className: PropTypes.string,
    highlight: PropTypes.bool,
    children: PropTypes.any
};

export default AnswerButtonWrapper;
