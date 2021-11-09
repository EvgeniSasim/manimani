import React from 'react';
import PropTypes from 'prop-types';

const SuccessArrow = ({ className, color = '#35a64B', ...props }) => (
    <svg className={className} {...props} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="42" height="32" viewBox="0 0 42 32">
        <defs>
            <path id="vsaga" d="M458.59 217.58l-25.6 25.73-9.58-9.62a2 2 0 0 0-2.83 0 2.02 2.02 0 0 0 0 2.84l12.4 12.46 28.44-28.57c.78-.78.78-2.05 0-2.84a2 2 0 0 0-2.83 0z" />
        </defs>
        <g>
            <g transform="translate(-420 -217)">
                <use fill={color} xlinkHref="#vsaga" />
            </g>
        </g>
    </svg>
);

SuccessArrow.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default SuccessArrow;
