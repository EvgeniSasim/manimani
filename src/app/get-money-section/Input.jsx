import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TextMask from 'react-text-mask';
import isFunction from 'lodash-es/isFunction';
import { Flex } from 'grid-styled';

import { BoxBold } from '~/fonts/muller';
import { masks, parsers } from '~/app/common/input-mask';

const LabelWrapper = styled(Flex)`
    width: 100%;
    height: 51px;
    display: flex;
    background-color: #f3f3f3;
    border-radius: 10px;
`;

const StyledPrefix = styled(Flex)`
    width: 53%;
    padding-top: 3px;
    color: #acabab;
    font-size: 18px;
`;

const TextMaskStyled = styled(TextMask)`
    width: 47%;
    font-family: MullerBold, sans-serif;
    border: none;
    color: #292929;
    font-size: 18px;
    text-align: left;
    outline: none;
    padding-top: 17px;
    padding-bottom: 14px;
    box-sizing: border-box;
    background-color: transparent;
`;

const Input = ({ className, moneyCount, setMoneyCount, onValueChange, onChange, ...props }) => (
    <LabelWrapper is="label" justifyContent="center">
        <StyledPrefix justifyContent="flex-end" alignItems="center" pr="10px">
            <BoxBold>Введите сумму: </BoxBold>
        </StyledPrefix>
        <TextMaskStyled
            className={className} {...props}
            mask={masks.rublesWithSummMask}
            value={moneyCount}
            onFocus={() => setMoneyCount('')}
            onBlur={() => moneyCount > 0 ? moneyCount : setMoneyCount(100000)}
            onChange={(e, ...args) => {
                if (isFunction(onChange)) {
                    onChange(e, ...args);
                }
                if (isFunction(onValueChange)) {
                    onValueChange(parsers.getNumbers(e.target.value));
                }
            }}
            onInput={e => setMoneyCount(parsers.getNumbers(e.target.value))}
            type="tel"
        />
    </LabelWrapper>
);

Input.propTypes = {
    className: PropTypes.string,
    moneyCount: PropTypes.number.isRequired,
    setMoneyCount: PropTypes.func.isRequired
};

export default Input;
