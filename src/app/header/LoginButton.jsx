import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectProps } from 'react-decoration';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { ProfileLogo } from '~/app/common/logo-components';

const WrapperFlex = styled(Flex)`
    display: inline-flex;
    cursor: pointer;
`;

class LoginButton extends Component {
    static propTypes = {
        className: PropTypes.string,
        logoColor: PropTypes.string,
        logoHoverColor: PropTypes.string,
        fontColor: PropTypes.string,
        fontHoverColor: PropTypes.string,
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
    render({ className, logoColor = '#1a9f29', logoHoverColor = '#fc9924', fontColor = '#292929', fontHoverColor = '#fc9924' }) {
        const LinkStyled = styled.span`
            font-size: 16px;
            text-decoration: none;
            color: ${this.state.isHovered ? fontHoverColor : fontColor};
        `;

        return (
            <WrapperFlex
                className={className}
                alignItems='center'
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <Flex width={['21px']} justifyContent='center'>
                    <ProfileLogo color={this.state.isHovered ? logoHoverColor : logoColor} />
                </Flex>
                <Box
                    ml={['8px']}
                    pt={['5px']}
                >
                    <LinkStyled
                        onClick={() => window.location.replace(`${ACCOUNT_URL + '/login'}`)}
                    >
                        Войти
                    </LinkStyled>
                </Box>
            </WrapperFlex>
        )
    }
}

export default LoginButton;
