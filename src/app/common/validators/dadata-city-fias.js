import { addValidator } from 'redux-form-validators';
import isObject from 'lodash-es/isObject';
import has from 'lodash-es/has';

const dadataCityFias = addValidator({
    defaultMessage: 'Выберите город из списка',
    validator: (options, value) => isObject(value) && has(value, 'data.city_fias_id')
});

export default dadataCityFias;
