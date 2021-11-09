import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box } from 'grid-styled';

import { screenWidthBreakpoints } from '~/app/common/constants';

const Wrapper = styled(Box)`
    cursor: pointer;

    &:hover {
        color: #fc9924;
    }

    @media(max-width: ${screenWidthBreakpoints.TABLET}px) {
        text-align: center;
    }
`;

const City = ({ title, fiasID, locationOverlaySelectRegion, hideOverlay }) => (
    <Wrapper
        width={[ '100%', '200px', '250px' ]}
        pb='15px'
        color='#1a9f29'
        onClick={() => {
            locationOverlaySelectRegion(title, fiasID);
            hideOverlay();
        }}
    >
        {title}
    </Wrapper>
);

City.propTypes = {
    title: PropTypes.string.isRequired,
    fiasID: PropTypes.string.isRequired,
    locationOverlaySelectRegion: PropTypes.func.isRequired,
    hideOverlay: PropTypes.func.isRequired
};

export default City;
