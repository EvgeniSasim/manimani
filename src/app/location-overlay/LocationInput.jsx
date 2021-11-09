import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DadataSuggestions from 'react-dadata-suggestions';
import { Box } from 'grid-styled';

const BoxWrapper = styled(Box)`
    height: 51px;

    input.suggestions-input {
        background: none;
        border: 1px solid #1a9f29;
        border-radius: 10px;
        outline: none;
        height: 51px;
        line-height: 54px;
        padding-top: 5px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 20px;
    }

    .suggestions-wrapper {
        font-size: 20px;
        line-height: 20px;

        .suggestions-hint,
        .suggestions-suggestion {
            padding-left: 15px;
        }
    }
`;

const LocationInput = ({ dadataProps }) => (
    <BoxWrapper>
        <DadataSuggestions
            token={DADATA_KEY}
            service='address'
            specialRequestOptions={{
                from_bound: {
                    value: 'region'
                },
                to_bound: {
                    value: 'region'
                }
            }}
            {...dadataProps}
        />
    </BoxWrapper>
);

LocationInput.propTypes = {
    dadataProps: PropTypes.object
};

export default LocationInput;
