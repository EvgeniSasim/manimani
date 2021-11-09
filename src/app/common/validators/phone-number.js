import { addValidator } from 'redux-form-validators';

export const phoneNumberMask = /^\+7 \((3|4|5|6|8|9)\d{2}\) \d{3}\-\d{2}\-\d{2}$/;

const phoneNumber = addValidator({
    validator: (options, value) => {
        if (!/^\+7 \((3|4|5|6|8|9)/.test(value)) {
            return {
                id: 'form.errors.phoneNumber.invalidCode',
                defaultMessage: 'Код города/оператора должен начинаться с цифры 3, 4, 5, 6, 8, 9'
            }
        }

        if (!phoneNumberMask.test(value)) {
            return {
                id: 'form.errors.phoneNumber.invalid',
                defaultMessage: 'Номер телефона должен состоять из 10 цифр, начиная с кода оператора'
            }
        }
    }
});

export default phoneNumber;
