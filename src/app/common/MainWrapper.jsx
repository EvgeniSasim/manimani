import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box } from 'grid-styled';

const MainWrapper = ({ className, children, width=[ '100%', '100%', '1137px' ], ...props }) => (
    <Flex className={className} justifyContent='center' {...props}>
        <Box width={width}>
            { children }
        </Box>
    </Flex>
);

MainWrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any
};

export default MainWrapper;
