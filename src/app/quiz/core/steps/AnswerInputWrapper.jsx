import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Flex, Box } from 'grid-styled';
import isFunction from 'lodash-es/isFunction';

import { SuccessArrow, Cross } from '~/app/common/logo-components';

const AnswerInputWrapper = ({
    className,
    children,
    meta,
    input,
    withoutValidation = false,
    dontShowSuccessValidationStatus = false,
    isActiveCallback,
    helpText,
    ...props
}) => {
    const showError = !withoutValidation && meta.invalid && meta.visited;
    const showSuccess = !withoutValidation && meta.valid && meta.visited;
    const showInitial = !showError && !showSuccess && !(isFunction(isActiveCallback) && isActiveCallback(input.value));

    return (
        <Fragment>
            {helpText && (
                <HelpInfo>{helpText}</HelpInfo>
            )}
            <BoxWrapper
                className={className}
                width='353px'
                bg={showInitial ? 'none' : '#ffffff'}
                color={showInitial ? '#ffffff' : '#282828'}
                showInitial={showInitial}
                showError={showError}
                meta={meta}
                {...props}
            >
                <Flex justifyContent='space-between' pr={['10px']}>
                    <Box width='100%'>
                        {children}
                    </Box>
                    {!withoutValidation &&
                    <FlexFieldValidationStatus
                        pt={showSuccess ? '9px' : '15px'}
                        width='21px'
                        onClick={() => showError && input.onChange('')}
                        style={{
                            cursor: showError ? 'pointer' : 'auto'
                        }}
                    >
                        {showError && (
                            <Cross />
                        )}
                        {!dontShowSuccessValidationStatus && showSuccess && (
                            <SuccessArrow />
                        )}
                    </FlexFieldValidationStatus>
                    }
                </Flex>
                {showError && <ErrorMessage color='#ffffff' fontSize='12px' pl='20px'>{meta.error}</ErrorMessage>}
            </BoxWrapper>
        </Fragment>
    );
};

const HelpInfo = styled.div`
    font-family: MullerBold, sans-serif;
    font-size: 13px;
    color: white;
    padding-left: 20px;
    width: 100%;
    margin-bottom: -20px;
    margin-top: 20px;
`;

const ErrorMessage = styled(Box)`
    position: absolute;
    line-height: 12px;
    text-align: left;
    :before {
        content: "- ";
    }
`;

const BoxWrapper = styled(Box)`
    position: relative;
    border-radius: 10px;
    ${props => props.showError ? css`
        border: 2px solid #c94848` : css`
        border: 1px solid #fff`
    };
    font-size: 18px;
    height: 51px;
    line-height: 54px;
    text-align: center;

    input {
        border: none;
        color: ${props => props.showInitial ? '#ffffff' : '#282828'};
        outline: none;
        width: 100%;
        background-color: transparent;
        padding-left: 20px;
        padding-right: 20px;

        &::placeholder {
            color: ${props => props.showInitial ? '#ffffff' : '#282828'};
        }

        &:focus {
            border: none;
        }
    }
`;

const FlexFieldValidationStatus = styled(Flex)`
    z-index: 1;
`;

export default AnswerInputWrapper;
