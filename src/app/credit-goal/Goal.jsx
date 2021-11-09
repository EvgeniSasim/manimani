import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { injectProps } from 'react-decoration';
import { Link } from 'react-router-dom';
import values from 'lodash-es/values';

import { BoxBold } from '~/fonts/muller';
import { creditGoals } from './duck';

const FlexWrapper = styled(Flex)`
    cursor: pointer;

    &:hover {
        background-color: #ffffff;
        box-shadow: 0 0 15px rgba(40, 40, 40, 0.1);
    }
`;

const LinkStyled = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

const Title = styled(BoxBold)`
    text-align: center;
`;

class Goal extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string.isRequired,
        creditGoal: PropTypes.oneOf(values(creditGoals)),
        renderLogo: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            isHovered: false
        };
    }

    mouseOut() {
        this.setState({
            isHovered: false
        });
    }

    mouseOver() {
        this.setState({
            isHovered: true
        });
    }

    @injectProps
    render({ className, title, creditGoal, renderLogo }) {
        return (
            <FlexWrapper
                className={className}
                flex={[ '1 0 48%', '1 0 48%', '1 0 30%' ]}
                justifyContent='center'
                pt={[ '22px', '30px' ]}
                pb={[ '20px', '40px' ]}
                onMouseOut={() => this.mouseOut()}
                onMouseOver={() => this.mouseOver()}
                onClick={() => window.yaCounter45302445 && window.yaCounter45302445.reachGoal(`B1_0_0`)}
            >
                <LinkStyled to={{ pathname: `/quiz/${creditGoal}`, search: window.location.search }} replace>
                    <Flex alignItems='center' flexDirection='column'>
                        <Box>
                            {renderLogo(this.state.isHovered)}
                        </Box>
                        <Title mt='25px' fontSize={[ '16px', '22px' ]}>{title}</Title>
                    </Flex>
                </LinkStyled>
            </FlexWrapper>
        );
    }
}

export default Goal;
