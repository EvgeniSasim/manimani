import { createReducer } from 'reduxsauce';
import moment from 'moment';

const initialState = {
    startDate: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
};

export const handlers = {};

export default createReducer(initialState, handlers);
