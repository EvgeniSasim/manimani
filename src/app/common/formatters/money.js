import isFinite from 'lodash-es/isFinite';

const formatMoney = (value, postfix = ' Р.') => isFinite(value) ? parseInt(value).toLocaleString('ru-RU') + postfix : null;

export default {
    formatMoney
};
