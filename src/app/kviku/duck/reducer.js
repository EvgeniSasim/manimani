import { createReducer } from 'reduxsauce';

import selectors from './selectors';

const initialState = {
    id: selectors.generateId()
};

export default createReducer(initialState, {});
