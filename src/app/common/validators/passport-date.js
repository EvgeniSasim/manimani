import { addValidator } from 'redux-form-validators';
import moment from 'moment';

const passportDate = addValidator({
    validator: (options, value) => {
        let endDay = moment().subtract(1, 'days');
        let startDay = moment().subtract(20, 'years');

        if (endDay.diff(moment(value, 'DD.MM.YYYY'), 'days', true) < 0) {
            return {
                type: 'passportDate',
                defaultMessage: 'Дата должна быть не позднее ' + endDay.format('DD.MM.YYYY')
            };
        } else if (startDay.diff(moment(value, 'DD.MM.YYYY'), 'years', true) > 0) {
            return {
                type: 'passportDate',
                defaultMessage: 'Дата должна быть не ранее ' + startDay.format('DD.MM.YYYY')
            };
        }
    }
});

export default passportDate;
