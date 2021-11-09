import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { injectProps } from 'react-decoration';
import { Box } from 'grid-styled';

import { Cross } from '~/app/common/logo-components';

const BoxWrapper = styled(Box)`
    cursor: pointer;
`;

class CloseButton extends Component {
    static propTypes = {
        color: PropTypes.string,
        colorHover: PropTypes.string
    };

    static defaultColor = '#1a9f29';

    static defaultColorHover = '#fc9924';

    constructor(props) {
        super(props);

        const { color = CloseButton.defaultColor } = props;

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = {
            color: color
        };
    }

    @injectProps
    onMouseEnter({ colorHover = CloseButton.defaultColorHover }) {
        this.setState({
            color: colorHover
        });
    }

    @injectProps
    onMouseLeave({ color = CloseButton.defaultColor }) {
        this.setState({
            color: color
        });
    }

    render() {
        return (
            <BoxWrapper
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
                {...this.props}
            >
                <Cross color={this.state.color} />
            </BoxWrapper>
        );
    }
}

export default CloseButton;
