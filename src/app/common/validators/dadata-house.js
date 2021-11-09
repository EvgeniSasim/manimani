import { addValidator } from 'redux-form-validators';
import isObject from 'lodash-es/isObject';
import has from 'lodash-es/has';
import isString from 'lodash-es/isString';

const dadataHouse = addValidator({
    defaultMessage: 'Укажите номер дома',
    validator: (options, value) => isObject(value) && has(value, 'data.house') && isString(value.data.house),
});

export default dadataHouse;
