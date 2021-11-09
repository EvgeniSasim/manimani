import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import {Link} from 'react-router-dom';

import { FlexBold, BoxBold } from '~/fonts/muller';
import { Button } from '~/app/common';
import { screenWidthBreakpoints } from '~/app/common/constants';
import InputContainer from './InputContainer';
import ArrowDown from './ArrowDown';
import { creditGoals } from '~/app/credit-goal/duck';

const FlexWrapper = styled(Flex)`
    height: 570px;
    border-radius: 50%;
    background-color: #ffffff;
    box-shadow: 0 0 20px rgba(37, 37, 37, 0.34);

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        height: 427px;
    }
`;

const MoneyWidget = ({ className, onClick, onMoneyChange }) => (
    <FlexWrapper
        className={className}
        width={['427px', '570px']}
        alignItems="center"
        flexDirection="column"
    >
        <Box mt={['55px', '102px']} fontSize={['28px', '36px']} color="#292929">Мне нужно:</Box>
        <Box mt={['20px', '40px']}>
            <Box width={['305px', '490px']} mb="20px">
                <InputContainer onValueChange={onMoneyChange} />
            </Box>
            <Flex justifyContent="center">
                <ArrowDown />
            </Flex>
        </Box>
        <FlexBold mt="20px" fontSize={['19px', '30px']} flexDirection="column" alignItems="center">
            <Box color="#292929">Вам предодобрено до&nbsp;</Box>
            <Box color="#fc9924">890 000 Р.</Box>
        </FlexBold>
        <BoxBold mt="25px">
            <Link to={{ pathname: `/quiz/${creditGoals.JUST_MONEY}`, search: window.location.search }}>
                <Button onClick={() => window.yaCounter45302445.reachGoal('B1_0_0')}>ПОЛУЧИТЬ ДЕНЬГИ</Button>
            </Link>
        </BoxBold>
    </FlexWrapper>
);

MoneyWidget.propTypes = {
    className: PropTypes.string,
    moneyCount: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    onMoneyChange: PropTypes.func
};

export default MoneyWidget;
