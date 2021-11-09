import { addValidator } from 'redux-form-validators';
import isEmpty from 'lodash-es/isEmpty';

const passportSeries = addValidator({
    validator: (options, value) => {
        const parsedValue = parseInt(value.replace(/-/g, ''), 10);
        if (isEmpty(value) || !/^\d{2}-\d{2}$/.test(value) || parsedValue < 1) {
            return {
                id: 'form.errors.passportSeries.invalidCode',
                defaultMessage: 'Введите корректную серию паспорта'
            }
        }
    }
});

export default passportSeries;
