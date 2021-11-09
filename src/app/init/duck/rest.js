import qs from 'qs';

import { fetch } from '~/app/common';

const REST = {
    fetch: fid => fetch('/api/v1/landing/init?' + qs.stringify({
        'fid': fid
    }))
};

export default REST;
