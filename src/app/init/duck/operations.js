import qs from 'qs';

import REST from './rest';
import { Creators } from './actions';
import fetchingStatuses from './fetching-statuses';
import {serviceWorkerCreate} from "../../common/serviceWorker";

const fetch = () => async dispatch => {
    dispatch(Creators.initSetFetchingStatus(fetchingStatuses.IN_PROGRESS));

    try {
        const { fid } = qs.parse(window.location.search, { ignoreQueryPrefix: true });

        const response = await REST.fetch(fid);

        const responseData = await response.json();

        dispatch(Creators.initSetData(responseData));

        dispatch(Creators.initSetFetchingStatus(fetchingStatuses.SUCCESS));

        serviceWorkerCreate();
    } catch (e) {
        dispatch(Creators.initSetFetchingStatus(fetchingStatuses.FAILED));
    }
};

export default {
    fetch
};
