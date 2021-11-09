import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { injectProps } from 'react-decoration';
import { Flex, Box } from 'grid-styled';

const ModalBgWrapperStyled = styled(Box)`
    height: 100vh;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    z-index: 900;
    -webkit-overflow-scrolling: touch;
`;

const ScrollWrapper = styled(Flex)`
    width: 100%;
    height: 100vh;
    overflow: auto;
    background-color: rgba(37,38,37, 0.7);
`;

class ModalBackground extends Component {
    componentWillUnmount() {
        document.querySelector('body').style.overflow = 'unset';
    }

    @injectProps
    render({ isOpen, close, children, ...props }) {
        document.querySelector('body').style.overflow = isOpen ? 'hidden' : 'unset';

        return (
            <Fragment>
                {isOpen && (
                    <ModalBgWrapperStyled {...props}>
                        <ScrollWrapper onClick={close} justifyContent="center" alignItems="flex-start">
                            <div onClick={(e) => e.stopPropagation()}>
                                {children}
                            </div>
                        </ScrollWrapper>
                    </ModalBgWrapperStyled>
                )}
            </Fragment>
        );
    }
}

export default ModalBackground;
