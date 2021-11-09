import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import values from 'lodash-es/values';
import { Box, Flex } from 'grid-styled';

import { stepIndicatorStates } from '../duck';
import { screenWidthBreakpoints } from '~/app/common/constants';

const outterCircleBorderWidth = 1;

const InnerCircle = styled(Flex)`
    height: 80px;
    border-radius: 50%;
    opacity: 1;
    font-family: MullerBold, sans-serif;

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        height: 68px;
    }

    @media(min-width: ${screenWidthBreakpoints.TABLET}px) and (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
        height: 70px;
    }
`;

const StepIndicator = ({ className, step, state = stepIndicatorStates.INACTIVE }) => {
    const isActive = state === stepIndicatorStates.ACTIVE;
    const isFinished = state === stepIndicatorStates.FINISHED;

    const animatedCircleRadius = 4;

    const mobileDiameter = isActive || isFinished ? 90 : 49;
    const tabletDiameter = isActive || isFinished ? 92 : 53;
    const desktopDiameter = isActive || isFinished ? 106 : 60;

    const animationDelay = -Math.floor(Math.random() * 40);

    const mobileAnimation = keyframes`
        from { transform: rotate(0deg) translateX(${mobileDiameter / 2 - outterCircleBorderWidth}px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(${mobileDiameter / 2 - outterCircleBorderWidth}px) rotate(-360deg); }
    `;

    const tabletAnimation = keyframes`
        from { transform: rotate(0deg) translateX(${tabletDiameter / 2 - outterCircleBorderWidth}px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(${tabletDiameter / 2 - outterCircleBorderWidth}px) rotate(-360deg); }
    `;

    const desktopAnimation = keyframes`
        from { transform: rotate(0deg) translateX(${desktopDiameter / 2 - outterCircleBorderWidth}px) rotate(0deg); }
        to   { transform: rotate(360deg) translateX(${desktopDiameter / 2 - outterCircleBorderWidth}px) rotate(-360deg); }
    `;

    const OutterCircle = styled(Flex)`
        position: relative;
        border: ${outterCircleBorderWidth}px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        color: #ffffff;
        height: ${desktopDiameter}px;

        @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
            height: ${mobileDiameter}px;
        }

        @media(min-width: ${screenWidthBreakpoints.TABLET}px) and (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
            height: ${tabletDiameter}px;
        }
    `;

    const AnimatedCircle = styled(Box)`
        position: absolute;
        width: ${animatedCircleRadius * 2}px;
        height: ${animatedCircleRadius * 2}px;
        border-radius: 50%;
        background-color: #ffffff;
        opacity: 0.2;
        left: ${desktopDiameter / 2 - animatedCircleRadius - outterCircleBorderWidth}px;
        top: ${desktopDiameter / 2 - animatedCircleRadius - outterCircleBorderWidth}px;
        animation: ${desktopAnimation} 4s linear ${animationDelay}s infinite;

        @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
            left: ${mobileDiameter / 2 - animatedCircleRadius - outterCircleBorderWidth}px;
            top: ${mobileDiameter / 2 - animatedCircleRadius - outterCircleBorderWidth}px;
            animation: ${mobileAnimation} 4s linear ${animationDelay}s infinite;
        }

        @media(min-width: ${screenWidthBreakpoints.TABLET}px) and (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
            left: ${tabletDiameter / 2 - animatedCircleRadius - outterCircleBorderWidth}px;
            top: ${tabletDiameter / 2 - animatedCircleRadius - outterCircleBorderWidth}px;
            animation: ${tabletAnimation} 4s linear ${animationDelay}s infinite;
        }
    `;

    return (
        <OutterCircle
            className
            width={[ `${mobileDiameter}px`, `${tabletDiameter}px`, `${desktopDiameter}px` ]}
            justifyContent='center'
            alignItems='center'
        >
            {(isActive || isFinished) ? (
                <InnerCircle
                    bg='#ffffff'
                    pt={[ '2px', '4px', '4px' ]}
                    width={[ '68px', '70px', '80px' ]}
                    justifyContent='center'
                    alignItems='center'
                    fontSize={[ '20px', '24px' ]}
                    color='#fc9924'
                >
                    {step}
                </InnerCircle>
            ) : (
                <Box
                    pt={[ '2px', '4px', '4px' ]}
                    fontSize={[ '15px', '18px' ]}
                >
                    {step}
                </Box>
            )}
            <AnimatedCircle />
        </OutterCircle>
    );
};

StepIndicator.propTypes = {
    className: PropTypes.string,
    step: PropTypes.number.isRequired,
    state: PropTypes.oneOf(values(stepIndicatorStates))
};

export default StepIndicator;
