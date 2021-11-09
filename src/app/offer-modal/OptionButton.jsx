import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import { screenWidthBreakpoints } from '~/app/common/constants';

const OptionButton = ({ active, children, ...props }) => {
    const OptionButtonStyled = styled(Flex)`
        max-width: 358px;
        width: 100%;
        height: 51px;
        border-radius: 10px;
        background-color: #f3f3f3;
        font-size: 18px;
        border: 1px solid ${active ? '#1a9f29' : '#e6e4e4'};
        background-color: ${active ? '#1a9f29' : 'transparent'};
        color: ${active ? '#fff' : '#292929'};
        transition: all .1s linear;
        cursor: pointer;
        font-family: MullerLight,sans-serif;
        font-weight: 300;

        &:hover {
            background-color: #1a9f29;
            color: #fff;
            border-color: #1a9f29;
        }

        @media (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
            max-width: 321px;
        }

        @media (max-width: ${screenWidthBreakpoints.TABLET}px) {
            max-width: 370px;
        }
    `;

    return (
        <OptionButtonStyled
            is="button"
            alignItems="center"
            justifyContent="center"
            mb={['10px', '15px', '20px']}
            mx={[0, '5px', 0]}
            {...props}
        >
            {children}
        </OptionButtonStyled>
    );
};

OptionButton.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.any.isRequired
}

export default OptionButton;