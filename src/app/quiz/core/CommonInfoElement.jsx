import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import isNull from 'lodash-es/isNull';

import { BoxBold } from '~/fonts/muller';

const BoxValue = styled(BoxBold)`
    text-align: center;
`;

const CommonInfoElement = ({ className, title, value = null, onClick = () => {} }) => (
    <Flex
        className={className}
        flex={['1 0 49%', '1 0 24%', '1 0 49%']}
        flexDirection='column'
        alignItems='center'
        pt={['20px', '29px', '39px']}
        pb={['17px', '17px', '27px']}
        css={{ overflow: 'hidden' }}
        onClick={onClick}
    >
        <Box fontSize={['10px', '12px']} color='#292929'>{title}</Box>
        <BoxValue mt='10px' fontSize={['16px', '18px']} color='#35a64B'>{isNull(value) ? '___' : value}</BoxValue>
    </Flex>
);

CommonInfoElement.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    value: PropTypes.any
};

export default CommonInfoElement;
