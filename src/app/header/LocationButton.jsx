import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectProps } from 'react-decoration';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import LocationImageURL from '~/img/location.png';
import LocationHoverImageURL from '~/img/location-hover.png';

const WrapperFlex = styled(Flex)`
    display: inline-flex;
    cursor: pointer;
`;

const Img = styled.img`
    height: 20px;
`;

class LocationButton extends Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        showOverlay: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = {
            isHovered: false
        };
    }

    onMouseEnter() {
        this.setState({
            isHovered: true
        });
    }

    onMouseLeave() {
        this.setState({
            isHovered: false
        });
    }

    @injectProps
    render({
        className,
        title,
        showOverlay,
        logoURL = LocationImageURL,
        logoHoverURL = LocationHoverImageURL,
        fontColor = '',
        fontColorHover = '#fc9924',
        ...props
    }) {
        return (
            <WrapperFlex
                className={className}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                onClick={() => showOverlay()}
                alignItems='center'
                justifyContent='center'
                {...props}
            >
                <Img src={this.state.isHovered ? logoHoverURL : logoURL} />
                <Box
                    ml={[ '8px' ]}
                    fontSize={[ '16px' ]}
                    pt={[ '5px' ]}
                    color={this.state.isHovered ? fontColorHover : fontColor}
                >
                    {title}
                </Box>
            </WrapperFlex>
        )
    }
}

export default LocationButton;
