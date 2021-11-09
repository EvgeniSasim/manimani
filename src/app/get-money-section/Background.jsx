import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const innerCircleAnimation = keyframes`
    from { transform: rotate(0deg) translateX(388.5px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(388.5px) rotate(-360deg); }
`;

const middleCircleAnimation = keyframes`
    from { transform: rotate(0deg) translateX(500px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(500px) rotate(-360deg); }
`;

const outterCircleAnimation = keyframes`
    from { transform: rotate(0deg) translateX(715px) rotate(0deg); }
    to   { transform: rotate(360deg) translateX(715px) rotate(-360deg); }
`;

const Circle = styled.circle.attrs({
    cx: '715',
    cy: '715',
    r: '4',
    fill: '#ffffff',
    fillOpacity: '0.15'
})`
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.11, 0.54, 0.99, 0.48);
`;

const InnerCircle = Circle.extend`
    animation-duration: 12s;
    animation-name: ${innerCircleAnimation};
    animation-timing-function: cubic-bezier(0.11, 0.54, 0.99, 0.48);
`;

const MiddleCircle = Circle.extend`
    animation-duration: 16s;
    animation-name: ${middleCircleAnimation};
    animation-timing-function: cubic-bezier(0, 0.29, 0.45, 0.94);
`;

const OutterCircle = Circle.extend`
    animation-duration: 20s;
    animation-name: ${outterCircleAnimation};
    animation-timing-function: cubic-bezier(0.54, 0.02, 0.48, 0.99);
`;

const BigCircle = ({ r }) => (
    <circle cx='715' cy='715' r={r} fillOpacity='0' stroke='#ffffff' strokeOpacity='0.15' strokeWidth='1px'></circle>
);

const Background = ({ className }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 1430 1430"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width='100%'
        height='100%'
    >
        <g>
            <BigCircle r='715' />
            <BigCircle r='500' />
            <BigCircle r='388.5' />
            <InnerCircle />
            <InnerCircle style={{animationDelay: '-4s'}} />
            <InnerCircle style={{animationDelay: '-8s'}} />
            <MiddleCircle style={{animationDelay: '-2s'}} />
            <MiddleCircle style={{animationDelay: '-6s'}} />
            <MiddleCircle style={{animationDelay: '-11s'}} />
            <MiddleCircle style={{animationDelay: '-14s'}} />
            <OutterCircle style={{animationDelay: '-1s'}} />
            <OutterCircle style={{animationDelay: '-2s'}} />
            <OutterCircle style={{animationDelay: '-4s'}} />
            <OutterCircle style={{animationDelay: '-6s'}} />
            <OutterCircle style={{animationDelay: '-8s'}} />
            <OutterCircle style={{animationDelay: '-11s'}} />
            <OutterCircle style={{animationDelay: '-12s'}} />
            <OutterCircle style={{animationDelay: '-16s'}} />
            <OutterCircle style={{animationDelay: '-18s'}} />
            <OutterCircle style={{animationDelay: '-19s'}} />
        </g>
    </svg>
);

Background.propTypes = {
    className: PropTypes.string
};

export default Background;
