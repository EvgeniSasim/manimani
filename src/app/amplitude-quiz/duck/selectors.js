import constants from './constants';

const getEventByStep = step => {
    const mapper = [
        //[ constants.LANDING_ST2, constants.LANDING_ST3, constants.LANDING_ST4, constants.LANDING_ST5 ],
        [ constants.LANDING_ST6, constants.LANDING_ST7, constants.LANDING_ST8, constants.LANDING_ST9 ],
        [ constants.LANDING_ST10 ]
    ];

    return mapper[step.step - 1][step.innerStep - 1];
};

const getActiveFieldsByRegistered = (registeredFields = {}) => {
    return Object.keys(registeredFields).filter(key => {
        if (registeredFields[key] && registeredFields[key].count > 0) {
            return true;
        }
    })
};

const getFieldsStateByFieldsAndErrors = (fields, errors) => {
    const formValues = {};

    fields.forEach(item => {
        formValues[item] = true;
    });

    Object.keys(errors).forEach(key => {
        if (formValues[key] !== true) {
            return;
        }

        formValues[key] = false;
    });

    return formValues;
};

export default {
    getEventByStep,
    getActiveFieldsByRegistered,
    getFieldsStateByFieldsAndErrors
}