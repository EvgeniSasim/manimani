import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { Link } from 'react-router-dom';

import { routes } from '~/app/common/constants';
import LoginButton from './LoginButton';
import LocationButtonContainer from './LocationButtonContainer';
import { MainLogo, Menu } from '~/app/common/logo-components';
import { MainWrapper, Hide } from '~/app/common';
import { LocationOverlayContainer } from '~/app/location-overlay';
import LocationMobileImageURL from '~/img/location-mobile.png';

const MainWrapperStyled = styled(MainWrapper)`
    position: relative;
`;

const MobileMenuButtonWrapper = styled(Hide)`
    height: 56px;
`;

const MobileMenuWrapper = styled(Flex)`
    position: absolute;
    z-index: 2;
`;

const MobileMenuVerticalLine = styled(Box)`
    opacity: 0.2;
`;

const LocationButtonContainerStyled = styled(LocationButtonContainer)`
    height: 76px;
`;

const LoginButtonStyled = styled(LoginButton)`
    height: 76px;
`;

const Header = ({ className, overlayIsShown, mobileMenuIsShown, toggleMobileMenu }) => (
    <MainWrapperStyled className={className}>
        <Flex justifyContent='space-between' alignItems='center' pl={[ '10px', '25px', '0px' ]}>
            <Flex width={[ '176px', '176px', '209px' ]} py={[ '10px', '10px', '15px' ]}>
                <Link to={{ pathname: routes.ROOT, search: window.location.search }} replace>
                    <MainLogo />
                </Link>
            </Flex>
            <Hide mob tab>
                <Flex justifyContent='space-between'>
                    <LocationButtonContainer pr='100px' />
                    <LoginButton />
                </Flex>
            </Hide>
            <MobileMenuButtonWrapper
                desk
                width='76px'
                px='25px'
                bg={mobileMenuIsShown ? '#11711d' : 'none'}
                onClick={() => toggleMobileMenu(!mobileMenuIsShown)}
            >
                <Menu color={mobileMenuIsShown ? '#ffffff' : '#2c2c2c'} />
            </MobileMenuButtonWrapper>
        </Flex>
        {overlayIsShown && <LocationOverlayContainer />}
        {mobileMenuIsShown && (
            <Hide desk>
                <MobileMenuWrapper
                    width='100%'
                    bg='#11711d'
                    onClick={() => toggleMobileMenu(!mobileMenuIsShown)}
                >
                    <Flex flex='1 0 49%' justifyContent='center'>
                        <LocationButtonContainerStyled
                            logoURL={LocationMobileImageURL}
                            logoHoverURL={LocationMobileImageURL}
                            fontColor='#ffffff'
                            fontColorHover='#ffffff'
                            width='100%'
                        />
                    </Flex>
                    <MobileMenuVerticalLine width='1px' bg='#ffffff' my='11px' />
                    <Flex flex='1 0 49%' justifyContent='center'>
                        <LoginButtonStyled
                            logoColor='#ffffff'
                            logoHoverColor='#ffffff'
                            fontColor='#ffffff'
                            fontHoverColor='#ffffff'
                        />
                    </Flex>
                </MobileMenuWrapper>
            </Hide>
        )}
    </MainWrapperStyled>
);

Header.propTypes = {
    className: PropTypes.string,
    overlayIsShown: PropTypes.bool,
    mobileMenuIsShown: PropTypes.bool,
    toggleMobileMenu: PropTypes.func
};

export default Header;
