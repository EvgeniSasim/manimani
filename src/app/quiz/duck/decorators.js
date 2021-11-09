import { reduxForm } from 'redux-form';

import constants from './constants';

function step() {
    return function(wrapped) {
        return reduxForm({
            form: constants.FORM_NAME,
            destroyOnUnmount: false,
            forceUnregisterOnUnmount: true,
        })(wrapped);
    };
}

export default {
    step
};
