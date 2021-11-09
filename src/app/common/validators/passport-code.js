import { addValidator } from 'redux-form-validators';

const passportCode = addValidator({
    validator: (options, value) => {
        if (value.length === 0) {
            return;
        }

        if (value.length !== 6 || parseInt(value, 10) < 1) {
            return {
                type: 'passportCode',
                defaultMessage: 'Введите корректный код подразделения',
            };
        }
    },
});

export default passportCode;
