import { injectGlobal } from 'styled-components';

import { screenWidthBreakpoints } from '~/app/common/constants';

injectGlobal`
    body {
        font-family: MullerLight, sans-serif;
        background-color: #f5f4f4;
        font-weight: 300;
        margin: 0;
        line-height: 1.3;
    }

    button {
        outline: none;
    }

    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        transition: background-color 5000s ease-in-out 0s;
    }
    
    @media (max-width: ${screenWidthBreakpoints.DESKTOP}px) {
        .suggestions-container .suggestions-suggestion {
            padding-top: 15px;
            padding-bottom: 15px;
        }
    }
`;
