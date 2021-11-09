import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { injectProps } from 'react-decoration';

import { MainWrapper, Theme } from '~/app/common';
import { HeaderContainer } from '~/app/header';
import { Footer } from '~/app/footer';
import { Kviku } from '~/app/kviku';
import MainQuizContainer from './MainQuizContainer';

const FlexWrapper = styled(Flex)`
    min-height: 100vh;
`;

const FlexQuizWrapper = styled(Flex)`
    background-image: linear-gradient(to right, rgba(26, 150, 72, 0.75) 0%, rgba(16, 4, 40, 0.75) 100%);
`;

class Layout extends Component {
    @injectProps
    componentDidMount({ fetchInitialData }) {
        fetchInitialData();
    }

    render() {
        return (
            <Theme>
                <FlexWrapper flexDirection='column'>
                    <HeaderContainer />
                    <FlexQuizWrapper flex='1' justifyContent='center'>
                        <MainWrapper>
                            <MainQuizContainer />
                        </MainWrapper>
                    </FlexQuizWrapper>
                    <Footer bg='#ffffff' logoFontColor='#2f2e2d' fontColor='#2f2e2d' />
                    <Kviku />
                </FlexWrapper>
            </Theme>
        );
    }
}

export default Layout;
