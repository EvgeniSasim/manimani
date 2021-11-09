import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';

const Wrapper = styled(Flex)`
    height: 100vh;
    background: linear-gradient(to right, rgba(26, 150, 72, 0.75) 0%, rgba(16, 4, 40, 0.75) 100%);

    p {
        margin: 0 0 0 10px;
        color: #fff;
        font-size: 30px;
    }

    a {
        color: #fff;
    }
`;

const IELandingPage = () => {
    return (
        <Wrapper
            width="100%"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <p>Вы используете устаревший браузер.</p>
            <p>Рекомендуем использовать <a href="https://www.google.com/intl/ru_ALL/chrome/" target="_blank">Google Chrome</a>.</p>
        </Wrapper>
    );
};

export default IELandingPage;