import isFinite from 'lodash-es/isFinite';

const getNumbers = value => {
    const result = parseInt(value.replace( /\D+/g, ''), 10);

    return isFinite(result) ? result : 0;
};

const getDigits = value => value.replace(/\D+/g, '');

export default {
    getNumbers,
    getDigits,
};
