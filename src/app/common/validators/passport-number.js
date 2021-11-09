import { addValidator } from 'redux-form-validators';
import isEmpty from 'lodash-es/isEmpty';

const passportNumber = addValidator({
    validator: (options, value) => {
        const parsedValue = parseInt(value.replace(/-/g, ''), 10);
        if (isEmpty(value) || !/^\d{3}-\d{3}$/.test(value) || parsedValue < 1) {
            return {
                id: 'form.errors.passportNumber.invalidCode',
                defaultMessage: 'Введите корректный номер паспорта'
            }
        }
    }
});

export default passportNumber;
