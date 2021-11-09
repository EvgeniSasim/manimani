import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

import { screenWidthBreakpoints } from '~/app/common/constants';

const ModalWindowStyled = styled(Flex)`
        border-radius: 18px;
        position: relative;
        overflow: hidden;

        @media (max-width: ${screenWidthBreakpoints.IPHONE6}px) {
            width: calc(100% - 20px) !important;
        }
    `;

const ModalWindow = ({ children, ...props }) => (
    <ModalWindowStyled
        flexDirection="column"
        alignItems="center"
        width={['80vw', '70vw', '800px']}
        mt={['80px', '100px', '130px']}
        mx={['10px', '25px', 0]}
        p={['65px 25px 45px', '65px 12vw 45px', '65px 145px 45px']}
        bg="#fff"
        {...props}
    >
        {children}
    </ModalWindowStyled>
);

ModalWindow.propTypes = {
    children: PropTypes.any.isRequired,
};

export default ModalWindow;
