import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImgStyled = styled.img`
    position: absolute;
    z-index: -9999;
`;

const Kviku = ({ id }) => (
    <ImgStyled src={`https://kviku.ru/pixel?market=${KVIKU_MARKET_LOGIN}&id=${id}`} />
);

Kviku.propTypes = {
    id: PropTypes.string.isRequired
};

export default Kviku;
