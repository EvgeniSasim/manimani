import React from 'react';
import { Flex, Box } from 'grid-styled';

import brushImgURL from './img/brush.png';
import carImgURL from './img/car.svg';
import houseImgURL from './img/house.png';
import refinancingImgURL from './img/refinancing.png';
import MainWrapper from '~/app/common/MainWrapper';
import Goal from './Goal';
import { LogoWrapper, MoneyStack, MoneyBag } from './logos';
import { creditGoals, selectors } from './duck';

const GetMoneySection = () => (
    <MainWrapper>
        <Flex alignItems='center' flexDirection='column' pb={['30px', '40px', '70px']}>
            <Box fontSize={['28px', '32px', '36px']} mt={['40px', '50px', '105px']}>Выберите цель кредита</Box>
            <Flex mt={['20px', '30px', '85px']} flexWrap='wrap' px={['0px', '25px', '0px']} justifyContent='space-evenly'>
                <Goal
                    title={selectors.getCreditGoalText(creditGoals.JUST_MONEY)}
                    creditGoal={creditGoals.JUST_MONEY}
                    renderLogo={isHovered => (
                        <LogoWrapper
                            innerCircleColor={isHovered ? '#1a9f29' : '#fc9924'}
                            renderLogo={() => (
                                <MoneyStack />
                            )}
                        />
                    )}
                />
                <Goal
                    title={selectors.getCreditGoalText(creditGoals.REFINANCING_LOAN)}
                    creditGoal={creditGoals.REFINANCING_LOAN}
                    renderLogo={isHovered => (
                        <LogoWrapper
                            innerCircleColor={isHovered ? '#1a9f29' : '#fc9924'}
                            pointerAnimationDelay='-1.33s'
                            renderLogo={() => (
                                <MoneyBag />
                            )}
                        />
                    )}
                />
                <Goal
                    title={selectors.getCreditGoalText(creditGoals.REPAIRING)}
                    creditGoal={creditGoals.REPAIRING}
                    renderLogo={isHovered => (
                        <LogoWrapper
                            innerCircleColor={isHovered ? '#1a9f29' : '#fc9924'}
                            pointerAnimationDelay='-2.67s'
                            renderLogo={() => (
                                <img width='100%' src={brushImgURL} />
                            )}
                        />
                    )}
                />
                <Goal
                    title={selectors.getCreditGoalText(creditGoals.MORTGAGE)}
                    creditGoal={creditGoals.MORTGAGE}
                    renderLogo={isHovered => (
                        <LogoWrapper
                            innerCircleColor={isHovered ? '#1a9f29' : '#fc9924'}
                            pointerAnimationDelay='-1.33s'
                            renderLogo={() => (
                                <img width='100%' src={houseImgURL} />
                            )}
                        />
                    )}
                />
                <Goal
                    title={selectors.getCreditGoalText(creditGoals.REFINANCING_MORTGAGE)}
                    creditGoal={creditGoals.REFINANCING_MORTGAGE}
                    renderLogo={isHovered => (
                        <LogoWrapper
                            innerCircleColor={isHovered ? '#1a9f29' : '#fc9924'}
                            pointerAnimationDelay='-2.67s'
                            renderLogo={() => (
                                <img width='100%' src={refinancingImgURL} />
                            )}
                        />
                    )}
                />
                <Goal
                    title={selectors.getCreditGoalText(creditGoals.AUTO_LOAN)}
                    creditGoal={creditGoals.AUTO_LOAN}
                    renderLogo={isHovered => (
                        <LogoWrapper
                            innerCircleColor={isHovered ? '#1a9f29' : '#fc9924'}
                            renderLogo={() => (
                                <img width='100%' src={carImgURL} />
                            )}
                        />
                    )}
                />
            </Flex>
        </Flex>
    </MainWrapper>
);

export default GetMoneySection;
