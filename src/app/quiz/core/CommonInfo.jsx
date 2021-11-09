import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import map from 'lodash-es/map';
import Scroller from 'react-scroll';

import { Hide } from '~/app/common';
import CommonInfoElement from './CommonInfoElement';
import MoneyStack from './MoneyStack';
import { selectors } from '../duck';

const AdditionalInfo = styled(Box)`
    text-align: center;
`;

const VerticalLine = () => (
    <Box flex='0 1 1px' mt='25px' mb='25px' bg='rgba(40, 40, 40, 0.1)' />
);

const HorizontalLine = () => (
    <Box flex='1 1 40%' pt='1px' bg='rgba(40, 40, 40, 0.1)' ml='14px' mr='14px' />
);

const scroller = Scroller.scroller;

const CommonInfo = ({ elements, activeStep }) => (
    <Flex width={['320px', '718px', '360px']} flexDirection='column'>
        <Hide mob>
            <Flex width='100%' bg='#35a64B' justifyContent='center'>
                <Box pt={['38px', '36px', '38px']} pb={['33px', '30px', '33px']}>
                    <MoneyStack />
                </Box>
            </Flex>
        </Hide>
        <Hide tab desk>
            <Flex bg='#ffffff' flexWrap='wrap' width='100%'>
                {map(elements, (element, index) => {
                    if (selectors.checkIsDisableCommonInfoElement(element, activeStep)) {
                        return;
                    }

                    const onClick = element.scrollTo ? () => scroller.scrollTo(element.scrollTo) : () => {};

                    return (
                        <Fragment key={index}>
                            {index === 0 && (
                                <Fragment>
                                    <CommonInfoElement onClick={onClick} title={element.title} value={element.value} />
                                    <VerticalLine />
                                </Fragment>
                            )}
                            {index !== 0 && index % 2 === 0 && (
                                <Fragment>
                                    <HorizontalLine />
                                    <HorizontalLine />
                                    <CommonInfoElement onClick={onClick} title={element.title} value={element.value} />
                                    <VerticalLine />
                                </Fragment>
                            )}
                            {index % 2 === 1 && (
                                <CommonInfoElement onClick={onClick} title={element.title} value={element.value} />
                            )}
                        </Fragment>
                    )
                })}
            </Flex>
        </Hide>
        <Hide tab mob>
            <Flex bg='#ffffff' flexWrap='wrap' width='100%'>
                {map(elements, (element, index) => {
                    return (
                        <Fragment key={index}>
                            {index === 0 && (
                                <Fragment>
                                    <CommonInfoElement title={element.title} value={element.value} />
                                    <VerticalLine />
                                </Fragment>
                            )}
                            {index !== 0 && index % 2 === 0 && (
                                <Fragment>
                                    <HorizontalLine />
                                    <HorizontalLine />
                                    <CommonInfoElement title={element.title} value={element.value} />
                                    <VerticalLine />
                                </Fragment>
                            )}
                            {index % 2 === 1 && (
                                <CommonInfoElement title={element.title} value={element.value} />
                            )}
                        </Fragment>
                    )
                })}
            </Flex>
        </Hide>
        <Hide mob desk>
            <Flex bg='#ffffff' flexWrap='wrap' width='100%'>
                {map(elements, (element, index) => {
                    if (selectors.checkIsDisableCommonInfoElement(element, activeStep)) {
                        return;
                    }

                    const onClick = element.scrollTo ? () => scroller.scrollTo(element.scrollTo) : () => {};

                    return (
                        <Fragment key={index}>
                            {index === 0 && (
                                <Fragment>
                                    <CommonInfoElement onClick={onClick} title={element.title} value={element.value} />
                                </Fragment>
                            )}
                            {index > 0 && (
                                <Fragment>
                                    <VerticalLine />
                                    <CommonInfoElement onClick={onClick} title={element.title} value={element.value} />
                                </Fragment>
                            )}
                        </Fragment>
                    )
                })}
            </Flex>
        </Hide>
        <Hide mob tab>
            <Flex flexDirection='column'>
                <AdditionalInfo mt='28px' fontSize='14px' color='#8db6a3'>
                    Укажите контактные данные для расчета персонального кредитного рейтинга.
                    На ваш телефон придет SMS с одноразовым паролем для подтверждения.
                </AdditionalInfo>
                <AdditionalInfo mt='14px' fontSize='14px' color='#8db6a3'>
                    Мы не передаем информацию третьим лицам без вашего согласия.
                </AdditionalInfo>
            </Flex>
        </Hide>
    </Flex>
);

CommonInfo.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            value: PropTypes.string
        })
    ),
    activeStep: PropTypes.object
};

export default CommonInfo;
