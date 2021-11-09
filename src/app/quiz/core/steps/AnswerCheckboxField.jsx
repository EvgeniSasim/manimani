import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import uniqueId from 'lodash-es/uniqueId';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';

import CheckedURL from '~/img/checkbox-checked.svg';
import UncheckedURL from '~/img/checkbox-unchecked.svg';

const NonVisibleInput = styled(Field)`
    display: none;
`;

const Img = styled.img`
    margin-right: 8px;
    float: left;
`;

const Label = styled.label`
    line-height: 26px;
    cursor: pointer;
    width: 100%;
`;

const getImg = (checked) => {
    return checked ? CheckedURL : UncheckedURL;
};

const AnswerCheckboxField = ({ id = `cb-${uniqueId()}`, input, children, meta, ...props }) => (
    <Flex width="100%" color="#fff" {...props}>
        <NonVisibleInput
            component="input"
            id={id}
            type="checkbox"
            {...input}
        />
        <Label htmlFor={id}>
            <Img src={getImg(input.value)} />
            {children}
        </Label>
    </Flex>
);

AnswerCheckboxField.propTypes = {
    id: PropTypes.string
};

export default AnswerCheckboxField;
