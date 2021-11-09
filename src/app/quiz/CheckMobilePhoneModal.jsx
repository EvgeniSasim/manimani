import React from 'react';
import qs from 'qs';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import { screenWidthBreakpoints } from '~/app/common/constants';
import { ModalBackground, ModalWindow, Button } from '~/app/common';
import { CancelIcon } from '~/app/common/logo-components';

const CloseButton = styled(Box)`
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;

    @media (max-width: ${screenWidthBreakpoints.TABLET}px)  {
        right: 12px;
        top: 12px;
    }
`;

const CheckMobilePhoneModal = ({ show, handleHide, mobilePhone }) => (
    <ModalBackground
        isOpen={show}
        close={handleHide}
    >
        <ModalWindow
            m={['65px 0 30px', '100px 0 30px', '40px 0 30px !important']}
            p={['65px 15px 30px', '65px 20px 45px', '65px 30px 45px']}
            width={['calc(100% - 25px)', 'calc(100% - 50px)', '800px']}
        >
            <Box
                mb="50px"
                color="#292929"
                fontSize={['26px', '30px', '36px']}
                css={{ textAlign: 'center' }}
            >
                Вы уже зарегистрированы в нашем сервисе
            </Box>
            <Box
                mb="50px"
                color="#292929"
                fontSize="16px"
                css={{ textAlign: 'center' }}
            >
                Для входа в личный кабинет нажмите кнопку "войти" и введите пароль, который придет вам в смс сообщении.
            </Box>
            <Button
                bg="#fc9924"
                textColor="#fff"
                hoverTextColor="#292929"
                borderHoverColor="#fc9924"
                width={['100%', '100%', '256px']}
                css={{ maxWidth: '256px' }}
                height="61px"
                fontSize={['13px', '15px', '17px']}
                onClick={() => window.location.replace(ACCOUNT_URL + '/login?' + qs.stringify({ mobilePhone: mobilePhone }))}
            >
                Войти
            </Button>
            <CloseButton onClick={handleHide}>
                <CancelIcon fillColor="#11711d" width="14px" />
            </CloseButton>
        </ModalWindow>
    </ModalBackground>
);

CheckMobilePhoneModal.propTypes = {
    show: PropTypes.bool.isRequired,
    handleHide: PropTypes.func.isRequired
};

export default CheckMobilePhoneModal;
