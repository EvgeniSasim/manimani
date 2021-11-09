import Validators from 'redux-form-validators';

const overrideDefaultValidationMessages = () => {
    Object.assign(Validators.messages, {
        email: "Введите корректный адрес эл. почты",
        presence: "Обязательное поле",
        date: "Введите корректную дату"
    });
}

export default overrideDefaultValidationMessages;
