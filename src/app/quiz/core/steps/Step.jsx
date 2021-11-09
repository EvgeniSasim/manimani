import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Field } from 'redux-form';
import has from 'lodash-es/has';
import includes from 'lodash-es/includes';
import intersection from 'lodash-es/intersection';
import keys from 'lodash-es/keys';
import isEmpty from 'lodash-es/isEmpty';
import Scroller from 'react-scroll';

import { Button } from '~/app/common';
import { LeftArrow } from '~/app/common/logo-components';
import { screenWidthBreakpoints } from '~/app/common/constants';
import { constants } from '../../duck';
import { AmplitudeQuizStep, AmplitudeQuizErrors } from '~/app/amplitude-quiz';

const Title = styled(Box)`
    @media(max-width: ${screenWidthBreakpoints.DESKTOP}px) {
        text-align: center;
    }
`;

const PreviousButton = styled.button`
    font-family: MullerBold, sans-serif;
    background: none;
    outline: none;
    border: none;
    text-decoration: underline;
    color: #ffffff;
    font-size: 17px;
    cursor: pointer;
    padding-top: 10px;

    &:hover {
        color: #fc9924;
    }
`;

const NextButton = styled(Button)`
    font-family: MullerBold, sans-serif;

    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        width: 155px;
    }
`;

const LeftArrowStyled = styled(LeftArrow)`
    margin-top: -2px;
    margin-right: 8px;
    float: left;

    &:hover {
        background-color: #fc9924;
    }
`;

const NextButtonContentStyled = styled(Flex)`
    height: 100%;
`;

const scroller = Scroller.scroller;

const Step = ({
    title,
    subtitle = '',
    children,
    fieldErrors,
    isSmallAnswersBlock = false,
    onPrevButtonClick,
    setSubmitErrors,
    applicationIsCreating,
}) => {
    if (window.outerWidth < screenWidthBreakpoints.TABLET) {
        useEffect(() => {
            scroller.scrollTo(constants.FORM_NAME);
        }, []);
    }

    const fieldNamesShouldBeValid = [];

    React.Children.forEach(children, child => {
        if (child.type === Field && has(child, 'props.name')) {
            if (!includes(fieldNamesShouldBeValid, child.props.name)) {
                fieldNamesShouldBeValid.push(child.props.name);
            }
        }
    });

    const nextButtonIsDisabled = !isEmpty(intersection(keys(fieldErrors), fieldNamesShouldBeValid));

    return (
        <Flex flexDirection='column' alignItems={['center', 'center', 'flex-start']}>
            <Title fontSize={['30px', '32px', '36px']} width={['320px', '100%']} color='#ffffff'>{title}</Title>
            {subtitle && <Title fontSize='15px' color='#ffffff' mt='5px'  px={['20px', 0, 0]}>{subtitle}</Title>}
            <Box width={['320px', isSmallAnswersBlock ? '510px' : '728px']} px={['20px', 0, 0]}>
                <Flex flexWrap='wrap' mt={['25px', '25px', '44px']}>
                    {children}
                </Flex>
                <Flex mt={['24px', '28px', '46px']} justifyContent='space-between'>
                    <PreviousButton type='button' onClick={onPrevButtonClick}>
                        <LeftArrowStyled color='#ffffff' /> НАЗАД
                    </PreviousButton>
                    <NextButton disabled={nextButtonIsDisabled || applicationIsCreating}>
                        <NextButtonContentStyled
                            width='100%'
                            justifyContent='center'
                            alignItems='center'
                            onClick={nextButtonIsDisabled && (() => {
                                setSubmitErrors(fieldErrors);
                                scroller.scrollTo(constants.FORM_NAME);
                            })}
                        >
                            ДАЛЬШЕ
                        </NextButtonContentStyled>
                    </NextButton>
                </Flex>
            </Box>
            <AmplitudeQuizStep/>
            <AmplitudeQuizErrors/>
        </Flex>
    );
}

Step.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    children: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.oneOf([Field])
        })
    ),
    fieldErrors: PropTypes.object.isRequired,
    isSmallAnswersBlock: PropTypes.bool,
    onPrevButtonClick: PropTypes.func.isRequired
};

export default Step;
