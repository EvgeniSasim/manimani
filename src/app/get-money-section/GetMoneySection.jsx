import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import MainWrapper from '~/app/common/MainWrapper';
import { events } from '~/app/amplitude-quiz/duck';
import { screenWidthBreakpoints } from '~/app/common/constants';
import Info from './Info';
import MoneyWidgetContainer from './MoneyWidgetContainer';
import Background from './Background';
import { getCohort } from '../amplitude/duck/helpers';

const MainWrapperStyled = styled(MainWrapper)`
    background-image: linear-gradient(to right, rgba(26, 150, 72, 0.75) 0%, rgba(16, 4, 40, 0.75) 100%);
    overflow: hidden;
`;

const FlexWrapper = styled(Flex)`
    position: relative;
    height: 838px;

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        height: 616px;
    }

    @media(min-width: ${screenWidthBreakpoints.TABLET}px) and (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
        height: 805px;
    }
`;

const MoneyWidgetContainerStyled = styled(MoneyWidgetContainer)`
    position: absolute;
    right: 0;
    top: 142px;
    z-index: 1;

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        top: 152px;
        transform: translateX(-50%);
        left: 50%;
    }

    @media(min-width: ${screenWidthBreakpoints.TABLET}px) and (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
        top: 200px;
        transform: translateX(-50%);
        left: 50%;
    }
`;

const BackgroundWpapper = styled(Box)`
    position: absolute;
    left: 140px;
    top: -290px;

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        top: -37px;
        transform: translateX(-50%);
        left: 50%;
    }

    @media(min-width: ${screenWidthBreakpoints.TABLET}px) and (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
        left: 50%;
        transform: translateX(-50%);
        top: -230px;
    }
`;

const InfoStyled = styled(Info)`
    z-index: 1;
`;

const GetMoneySection = ({ onClick, onMoneyChange, setEvent, setUserProps }) => {
    useEffect(() => {
        setUserProps({ utm_source: true, ...getCohort() });
        setEvent({ name: events.LANDING_ST1, props: {} });
    }, []);

    return (
        <MainWrapperStyled>
            <FlexWrapper>
                <InfoStyled mt={['55px', '75px', '90px']} />
                <MoneyWidgetContainerStyled
                    onClick={onClick}
                    onMoneyChange={onMoneyChange}
                />
                <BackgroundWpapper width={['805px', '1430px']}>
                    <Background />
                </BackgroundWpapper>
            </FlexWrapper>
        </MainWrapperStyled>
    );
};

GetMoneySection.propTypes = {
    onClick: PropTypes.func.isRequired,
    onMoneyChange: PropTypes.func
};

export default GetMoneySection;
