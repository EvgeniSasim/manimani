import React from 'react';
import PropTypes from 'prop-types';

const LeftArrow = ({ className, color = '#fc9924' }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="12" height="21" viewBox="0 0 12 21">
        <defs>
            <path id="597ga" d="M398.42 654c.4 0 .8-.15 1.11-.46.62-.62.62-1.62 0-2.23l-7.75-7.82 7.75-7.81c.62-.62.62-1.62 0-2.24a1.56 1.56 0 0 0-2.21 0l-8.87 8.94a1.59 1.59 0 0 0 0 2.23l8.87 8.93c.3.3.7.46 1.1.46z" />
        </defs>
        <g>
            <g transform="translate(-388 -633)">
                <use fill={color} xlinkHref="#597ga" />
            </g>
        </g>
    </svg>
);

LeftArrow.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default LeftArrow;
