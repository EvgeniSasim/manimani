import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import CheckedURL from '~/img/checkbox-checked.svg';
import UncheckedURL from '~/img/checkbox-unchecked.svg';

const getImg = (checked) => {
    return checked ? CheckedURL : UncheckedURL;
};

const Img = styled.img`
    margin: 0 8px 0 -3px;
    float: left;
`;

const CheckboxImage = ({ value, check }) => (
    <Img src={getImg(value)} onClick={check} />
);

CheckboxImage.propTypes = {
    value: PropTypes.bool.isRequired,
    check: PropTypes.func
}

export default CheckboxImage;