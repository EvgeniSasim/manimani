import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import filter from 'lodash-es/filter';
import map from 'lodash-es/map';
import values from 'lodash-es/values';

import { MainWrapper, CloseButton } from '~/app/common';
import LocationInput from './LocationInput';
import { fetchingStatuses } from '../init/duck';
import CityContainer from './CityContainer';

const MainWrapperStyled = styled(MainWrapper)`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.96);
    z-index: 2;
    overflow: auto;
`;

const LocationOverlay = ({ hideOverlay, regions, regionsFetchingStatus, locationOverlaySelectRegion }) => {
    const firstColumnRegions = filter(regions, (region, key) => key % 3 === 0);
    const secondColumnRegions = filter(regions, (region, key) => key % 3 === 1);
    const thirdColumnRegions = filter(regions, (region, key) => key % 3 === 2);

    return (
        <MainWrapperStyled width={[ '100%', '700px', '1137px' ]} py={[ '13px', '30px' ]} px={[ '15px', '0px', '0px' ]}>
            <Flex alignItems='center' justifyContent='center' flexDirection='column'>
                <CloseButton onClick={() => hideOverlay()} alignSelf='flex-end' />
                <Box fontSize={[ '28px', '28px', '38px' ]}>Выберите регион</Box>
                <Box width='100%' mt='25px'>
                    <LocationInput
                        dadataProps={{
                            onSelect: data => {
                                locationOverlaySelectRegion(data.value, data.data.region_fias_id);
                                hideOverlay();
                            }
                        }}
                    />
                </Box>
                <Box width='100%'>
                    {
                        regionsFetchingStatus === fetchingStatuses.SUCCESS
                            ? (
                                <Flex
                                    mt='27px'
                                    fontSize={[ '20px', '18px', '20px' ]}
                                    width='100%'
                                    flexWrap='wrap'
                                    justifyContent={[ 'center', 'space-between', 'space-between' ]}
                                >
                                    <Flex flexDirection='column'>
                                        {map(firstColumnRegions, (region, index) => (
                                            <CityContainer key={index} title={region.name} fiasID={region.fiasID} />
                                        ))}
                                    </Flex>
                                    <Flex flexDirection='column'>
                                        {map(secondColumnRegions, (region, index) => (
                                            <CityContainer key={index} title={region.name} fiasID={region.fiasID} />
                                        ))}
                                    </Flex>
                                    <Flex flexDirection='column'>
                                        {map(thirdColumnRegions, (region, index) => (
                                            <CityContainer key={index} title={region.name} fiasID={region.fiasID} />
                                        ))}
                                    </Flex>
                                </Flex>
                            )
                        : 'Загрузка...'
                    }
                </Box>
            </Flex>
        </MainWrapperStyled>
    );
}

LocationOverlay.propTypes = {
    hideOverlay: PropTypes.func.isRequired,
    regions: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            fiasID: PropTypes.string
        })
    ).isRequired,
    regionsFetchingStatus: PropTypes.oneOf(values(fetchingStatuses)).isRequired, 
    locationOverlaySelectRegion: PropTypes.func.isRequired
};

export default LocationOverlay;
