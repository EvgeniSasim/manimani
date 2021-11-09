import styled from 'styled-components';
import { Flex } from 'grid-styled';

import { screenWidthBreakpoints } from './constants';

export const breakpoints = {
    mob: `@media screen and (max-width: ${screenWidthBreakpoints.TABLET}px)`,
    tab: `@media screen and (min-width: ${screenWidthBreakpoints.TABLET}px) and (max-width: ${screenWidthBreakpoints.DESKTOP}px)`,
    desk: `@media screen and (min-width: ${screenWidthBreakpoints.DESKTOP}px)`
};

export const hidden = key => props => props[key] ? {
    [breakpoints[key]]: {
        display: 'none'
    }
} : null;

export const mob = hidden('mob');
export const tab = hidden('tab');
export const desk = hidden('desk');

const Hide = styled(Flex)([],
    mob,
    tab,
    desk
);

export default Hide;
