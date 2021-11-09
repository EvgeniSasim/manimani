import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { MainLogo } from '~/app/common/logo-components';
import MainWrapper from '~/app/common/MainWrapper';
import routes from '../common/constants/routes';

const Footer = ({
    bg = 'linear-gradient(to right, #51ad73 0%, #49415b 100%)',
    logoFontColor = '#ffffff',
    fontColor = '#ffffff'
}) => {
    const MainWrapperStyled = styled(MainWrapper)`
        text-align: center;
        background: ${bg};
    `;

    return (
        <MainWrapperStyled>
            <Flex flexDirection='column' alignItems='center' pt={['45px', '50px']} pb={['40px', '45px']} color={fontColor}>
                <Box width='210px'>
                    <MainLogo fontColor={logoFontColor} />
                </Box>
                <Box fontSize='12px' mt='30px' px={['10px', '25px', '80px']}>
                    ООО «Финмедиа», номер в государственном реестре операторов обработки персональных данных Роскомнадзора 78-18-005637, ОГРН 1157847413954.
                </Box>
                <Box fontSize='12px' my={'10px'}>
                    <LinkStyled to={routes.PRIVACY_POLICY} target='_blank'>Политика обработки персональных данных</LinkStyled>
                </Box>
                <Box fontSize='12px'>© 2021 Manimani — онлайн сервис подбора кредитного предложения.</Box>
            </Flex>
        </MainWrapperStyled>
    );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: rgb(118,174,203);
  :hover {
    color: rgba(118,174,203,.8);
  }
`;

export default Footer;
