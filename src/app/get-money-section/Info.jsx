import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { BoxBold } from '~/fonts/muller';
import { BoxLight as BoxLightOpenSans } from '~/fonts/opensans';
import { Hide } from '~/app/common';
import { MoneyStack } from '~/app/credit-goal/logos';

import { screenWidthBreakpoints } from '~/app/common/constants';

const Notice = styled(Box)`
    opacity: 0.4;
`;

const Ul = styled.ul`
    margin: 0;
`;

const Li = styled.li`
    margin-top: 20px;
`;

const MainHeader = styled(BoxBold)`
    @media (max-width: ${screenWidthBreakpoints.TABLET}px) {
        text-align: center;
    }
`;

const Info = ({ className, ...props }) => (
    <Flex
        className={className}
        color="#ffffff"
        alignItems={['center', 'center', 'flex-start']}
        flexDirection="column"
        width="100%"
        {...props}
    >
        <MainHeader fontSize={['31px', '48px', '60px']}>Здесь одобряют кредиты</MainHeader>
        <Hide mob tab>
            <Flex flexDirection="column">
                <Box fontSize={['48px']}>Мы поможем вам:</Box>
                <Flex mt={['40px']}>
                    <Flex width="190px" alignItems='center'>
                        <MoneyStack width={190} height={155} />
                    </Flex>
                    <BoxLightOpenSans fontSize="18px" width={['240px']} ml="40px">
                        <Ul>
                            <li>
                                Оформить кредит или займ с плохой кредитной историей
                            </li>
                            <Li>
                                Получить деньги под низкий процент
                            </Li>
                            <Li>
                                Отправить заявку и узнать решение в один клик
                            </Li>
                        </Ul>
                    </BoxLightOpenSans>
                </Flex>
                <Box fontSize="18px" mt="56px" width={['450px']}>
                    <Box mb="20px">Не переплачивайте банку или МФО. Подберем программы беспроцентного кредитования</Box>
                    <Box>Бесплатно рассчитаем кредитный рейтинг и подскажем как исправить кредитную историю</Box>
                </Box>
            </Flex>
        </Hide>
        <Hide mob tab>
            <Notice fontSize="14px" mt="42px" width={['470px']}>
                *У большинства партнеров manimani.ru существуют программы беспроцентного кредитования. Мы оставляем за собой право предложения иных индивидуальных условий по кредитам и займам.
            </Notice>
        </Hide>
    </Flex>
);

Info.propTypes = {
    className: PropTypes.string
};

export default Info;
