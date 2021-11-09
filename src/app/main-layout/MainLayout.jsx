import React, { useEffect } from 'react';
import Scroll, { Element } from 'react-scroll';

import { Theme } from '~/app/common';
import { HeaderContainer } from '~/app/header';
import { GetMoneySection } from '~/app/get-money-section';
import { CreditGoal } from '~/app/credit-goal';
import { InfoForClients } from '~/app/info-for-clients';
import { Footer } from '~/app/footer';
import { Kviku } from '~/app/kviku';

const scroller = Scroll.scroller;

const MainLayout = ({ fetchInitialData, isPrivacyPolicyPage, showOfferModal }) => {
    useEffect(() => {
        fetchInitialData();

        if (isPrivacyPolicyPage) {
            showOfferModal();
        }
    }, []);

    return (
        <Theme>
            <div>
                <HeaderContainer />
                <GetMoneySection
                    onClick={() => scroller.scrollTo('creditGoalSection', {
                        smooth: true,
                        duration: 300
                    })}
                />
                {/*
                    <Element name='creditGoalSection'>
                        <CreditGoal />
                    </Element>
                */}
                <InfoForClients />
                <Footer />
                <Kviku />
            </div>
        </Theme>
    );
};

export default MainLayout;
