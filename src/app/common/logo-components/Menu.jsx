import React from 'react';
import PropTypes from 'prop-types';

import SvgWrapper from './SvgWrapper';

const Menu = ({ className, color = '#2c2c2c', ...props }) => (
    <SvgWrapper
        className
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="26"
        height="22"
        viewBox="0 0 26 22"
        {...props}
    >
        <defs>
            <path id="qvh2a" d="M339 20v-4h26v4zm0 9v-4h26v4zm0 9v-4h26v4z" />
        </defs>
        <g>
            <g transform="translate(-339 -16)">
                <use fill={color} xlinkHref="#qvh2a" />
            </g>
        </g>
    </SvgWrapper>
);

Menu.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Menu;
