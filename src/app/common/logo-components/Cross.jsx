import React from 'react';
import PropTypes from 'prop-types';

const Cross = ({ className, color = '#c00' }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        width='21px'
        height='21px'
        viewBox="0 0 100 100"
    >
        <path strokeWidth='8px' stroke={color} d="M2.5 2.5l95 95m-95 0l95-95"></path>
    </svg>
);

Cross.propTypes = {
    className: PropTypes.string,
    color: PropTypes.string
};

export default Cross;
