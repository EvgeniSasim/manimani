import { addValidator } from 'redux-form-validators';
import isObject from 'lodash-es/isObject';
import has from 'lodash-es/has';
import isString from 'lodash-es/isString';

const dadataHouse = addValidator({
    defaultMessage: 'Укажите город',
    validator: (options, value) => (isObject(value) && has(value, 'data.city') && isString(value.data.city)) || (isObject(value) && has(value, 'data.settlement') && isString(value.data.settlement)),
});

export default dadataHouse;
