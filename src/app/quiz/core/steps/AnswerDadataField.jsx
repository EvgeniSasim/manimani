import React from 'react';
import styled from 'styled-components';
import DadataSuggestions from '../../../custom-modules/react-dadata-suggestions/src/index';
import isFunction from 'lodash-es/isFunction';

import AnswerInputWrapper from './AnswerInputWrapper';

const AnswerDadataField = ({
    className,
    specialRequestOptions,
    maskProps = {},
    input,
    meta,
    onChangeValue,
    onSelectSuggestion,
    type,
    quizSetFieldPasted,
    helpText,
    ...props
}) => (
    <AnswerInputWrapperStyled
        className={className}
        meta={meta}
        input={input}
        onFocus={(...args) => input.onFocus(...args)}
        onClick={() => 'Fix for dadata suggestions selection in the iOS. Just added click event on the parent'}
        onPaste={() => quizSetFieldPasted(input.name, true)}
        helpText={helpText}
        {...props}
    >
        <DadataSuggestions
            {...input}
            {...props}
            token={DADATA_KEY}
            query={input.value}
            minChars={1}
            specialRequestOptions={specialRequestOptions}
            type={type}
            onChange={value => input.onChange(value)}
            onSelect={sugg => {
                if (isFunction(onSelectSuggestion)) {
                    onSelectSuggestion(sugg, input);
                } else {
                    input.onChange(sugg.value);
                }

                if (isFunction(input.onSelect)) {
                    input.onSelect(sugg);
                }
            }}
        />
        <input value={input.value} type="hidden" name={input.name} />
    </AnswerInputWrapperStyled>
);

const AnswerInputWrapperStyled = styled(AnswerInputWrapper)`
    .suggestions-wrapper {
        color: #000000;
        text-align: left;
        width: 100%;
        z-index: 2;
        font-size: 100%;
        line-height: 100%;

        .suggestions-hint {
            white-space: normal;
        }

        .suggestions-hint,
        .suggestions-suggestion {
            padding-left: 19px;
        }
    }
`;

export default AnswerDadataField;
