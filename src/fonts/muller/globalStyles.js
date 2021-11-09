import { injectGlobal } from 'styled-components';

import FontMullerLightTtfURL from './files/Light.ttf';

import FontMullerBoldTtfURL from './files/Bold.ttf';

injectGlobal`
    @font-face {
        font-family: "MullerLight";
        src: url(${FontMullerLightTtfURL});
    }

    @font-face {
        font-family: "MullerBold";
        src: url(${FontMullerBoldTtfURL});
    }
`;
