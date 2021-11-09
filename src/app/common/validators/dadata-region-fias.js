import { addValidator } from 'redux-form-validators';
import isObject from 'lodash-es/isObject';
import has from 'lodash-es/has';

const dadataRegionFias = addValidator({
    defaultMessage: 'Выберите регион из списка',
    validator: (options, value) => isObject(value) && has(value, 'data.region_fias_id')
});

export default dadataRegionFias;
