import createNumberMask from 'text-mask-addons/dist/createNumberMask';

const rubles = createNumberMask({
    prefix: '',
    suffix: ' р.',
    thousandsSeparatorSymbol: ' ',
});

const rublesWithSummMask = createNumberMask({
    prefix: '',
    suffix: ' р.',
    thousandsSeparatorSymbol: ' ',
});

const date = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/];

const phoneNumber = ['+', '7', ' ', '(', /[\d|*]/, /[\d|*]/, /[\d|*]/, ')', ' ', /[\d|*]/, /[\d|*]/, /[\d|*]/, '-', /[\d|*]/, /[\d|*]/, '-', /[\d|*]/, /[\d|*]/];

const passportSeries = [/\d/, /\d/, '-', /\d/, /\d/];

const passportNumber = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

const passportCode = [/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

export default {
    rubles,
    rublesWithSummMask,
    date,
    phoneNumber,
    passportSeries,
    passportNumber,
    passportCode,
};
