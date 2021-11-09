import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import SvgWrapper from './SvgWrapper';

const SvgWrapperStyled = styled(SvgWrapper)`
    shape-rendering: geometricPrecision;
    text-rendering: geometricPrecision;
    image-rendering: optimizeQuality;
    fill-rule: evenodd;
    clip-rule: evenodd;
`;

const MainLogo = ({ className, fontColor = '#2B2A29' }) => (
    <SvgWrapperStyled
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 8600 1400"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <g>
            <polygon fill={fontColor} points="8387,150 8387,1310 8526,1310 8526,150 "/>
            <path fill={fontColor} d="M7255 1310l0 -829c0,-33 0,-66 0,-99l697 928 130 0 0 -1160 -140 0 0 827c0,33 0,66 0,99l-697 -926 -130 0 0 1160 140 0z"/>
            <path fill={fontColor} d="M6801 1310l149 0 -504 -1160 -154 0 -506 1160 151 0 413 -973c6,-15 11,-28 18,-45 7,17 12,30 18,45l415 973z"/>
            <polygon fill={fontColor} points="5503,150 5024,866 4545,150 4426,150 4426,1310 4565,1310 4565,413 4981,1036 5067,1036 5483,413 5483,1310 5622,1310 5622,150 "/>
            <polygon fill={fontColor} points="4015,150 4015,1310 4112,1310 4112,150 "/>
            <path fill={fontColor} d="M2843 1310l0 -895c0,-33 0,-66 0,-100l761 995 89 0 0 -1160 -98 0 0 893c0,33 0,66 0,99l-760 -992 -90 0 0 1160 98 0z"/>
            <path fill='#EA9901' d="M2564 1310l-515 -1160 -111 0 -517 1160c623,0 392,0 1143,0z"/>
            <polygon fill={fontColor} points="1159,150 657,894 153,150 70,150 70,1310 168,1310 168,339 625,1015 687,1015 1144,339 1144,1310 1242,1310 1242,150 "/>
            <polygon fill='#EA9901' points="6619,1036 6115,1036 6005,1310 6737,1309 "/>
        </g>
    </SvgWrapperStyled>
);

MainLogo.propTypes = {
    className: PropTypes.string,
    fontColor: PropTypes.string
};

export default MainLogo;
