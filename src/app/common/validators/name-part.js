import { addValidator } from 'redux-form-validators';
import isEmpty from 'lodash-es/isEmpty';

const namePart = addValidator({
    defaultMessage: 'Допустимо использовать только буквы русского алфавита и дефис',
    validator: (options, value) => isEmpty(value) || /^[А-ЯЁа-яё]+([А-ЯЁа-яё-]+)?$/.test(value)
});

export default namePart;
