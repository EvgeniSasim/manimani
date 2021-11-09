import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { screenWidthBreakpoints } from '~/app/common/constants';

const theme = {
    breakpoints: [
        `${screenWidthBreakpoints.TABLET}px`,
        `${screenWidthBreakpoints.DESKTOP}px`
    ]
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
);

Theme.propTypes = {
    children: PropTypes.any
};

export default Theme;
