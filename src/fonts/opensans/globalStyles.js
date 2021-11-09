import { injectGlobal } from 'styled-components';

import fontOpenSansLightTtfURL from './files/OpenSans-Light.ttf';
import fontOpenSansLightWoffURL from './files/OpenSans-Light.woff';
import fontOpenSansLightWoff2URL from './files/OpenSans-Light.woff2';

injectGlobal`
    @font-face {
        font-family: "OpenSans-Light";
        src: url("${fontOpenSansLightWoff2URL}") format("woff2"),
        url("${fontOpenSansLightWoffURL}") format("woff"),
        url("${fontOpenSansLightTtfURL}") format("ttf");
        font-style: normal;
    }
`;
