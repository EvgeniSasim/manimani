import { addValidator } from 'redux-form-validators';
import isObject from 'lodash-es/isObject';
import has from 'lodash-es/has';
import isString from 'lodash-es/isString';

const dadataHouse = addValidator({
    defaultMessage: 'Укажите улицу',
    validator: (options, value) => isObject(value) && has(value, 'data.street') && isString(value.data.street),
});

export default dadataHouse;
