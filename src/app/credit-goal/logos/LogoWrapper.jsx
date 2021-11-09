import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { screenWidthBreakpoints } from '~/app/common/constants';

const animation = keyframes`
    from { transform: rotate(0deg) translateX(51px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(51px) rotate(-360deg); }
`;

const mobileAnimation = keyframes`
    from { transform: rotate(0deg) translateX(44px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(44px) rotate(-360deg); }
`;

const Wrapper = styled(Flex)`
    position: relative;
    width: 104px;
    height: 104px;
    border-radius: 50%;
    border: 1px solid #cecdcd;

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        width: 90px;
        height: 90px;
    }
`;

const Point = styled(Box)`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #cecdcd;
    animation: ${animation} 4s linear infinite;

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        animation: ${mobileAnimation} 4s linear infinite;
    }
`;

const InnerCircle = styled(Box)`
    width: 80px;
    height: 80px;
    border-radius: 50%;

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        width: 68px;
        height: 68px;
    }
`;

const InnerLogoWrapper = styled(Flex)`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const LogoWrapper = ({ renderLogo, pointerAnimationDelay = '0', innerCircleColor = '#fc9924' }) => (
    <Wrapper>
        <Point ml={[ '40px', '47px' ]} mt={[ '40px', '47px' ]} style={{animationDelay: pointerAnimationDelay}} />
        <InnerLogoWrapper justifyContent='center' alignItems='center'>
            <InnerCircle bg={innerCircleColor} />
        </InnerLogoWrapper>
        <InnerLogoWrapper justifyContent='center' alignItems='center' px='26px'>
            {renderLogo()}
        </InnerLogoWrapper>
    </Wrapper>
);

LogoWrapper.propTypes = {
    renderLogo: PropTypes.func.isRequired,
    left: PropTypes.number,
    top: PropTypes.number,
    pointerAnimationDelay: PropTypes.string,
    innerCircleColor: PropTypes.string
};

export default LogoWrapper;
