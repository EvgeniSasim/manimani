import qs from 'qs';
import { Base64 } from 'js-base64';
import StringMask from 'string-mask';

import stepIndicatorStates from './step-indicator-states';

import dadataFormFields from './dadata-form-fields';
import { phoneNumberMask } from '~/app/common/validators/phone-number';

const getStepState = (step, activeStep) => {
    if (step < activeStep.step) {
        return stepIndicatorStates.FINISHED;
    }

    if (step === activeStep.step) {
        return stepIndicatorStates.ACTIVE;
    }

    return stepIndicatorStates.INACTIVE;
};

const getActiveLinePercent = (innerStep, maxInnerSteps) => {
    if (innerStep === 1) {
        return 0;
    }

    return parseInt((innerStep - 1) / maxInnerSteps * 100);
};

const getCurrentCreditGoal = () => window.location.pathname.split('/')[2];

const checkIsDisableCommonInfoElement = (element, activeStep) => element.activeStep && activeStep
    && (element.activeStep.step > activeStep.step
        || element.activeStep.innerStep > activeStep.innerStep);

const convertDadataAddress = address => {
    let fiasID = address[dadataFormFields.DATA][dadataFormFields.STREET_FIAS_ID];

    if (address[dadataFormFields.DATA][dadataFormFields.STREET_FIAS_ID]) {
        fiasID = address[dadataFormFields.DATA][dadataFormFields.STREET_FIAS_ID];
    } else if (address[dadataFormFields.DATA][dadataFormFields.CITY_FIAS_ID]) {
        fiasID = address[dadataFormFields.DATA][dadataFormFields.CITY_FIAS_ID];
    } else if (address[dadataFormFields.DATA][dadataFormFields.SETTLEMENT_FIAS_ID]) {
        fiasID = address[dadataFormFields.DATA][dadataFormFields.SETTLEMENT_FIAS_ID];
    }

    return {
        text: address[dadataFormFields.VALUE],
        fiasID: fiasID,
        house: address[dadataFormFields.DATA][dadataFormFields.HOUSE],
    };
};

const getPhoneFromQueryParams = () => {
    const params = qs.parse(window.location.search, {
        ignoreQueryPrefix: true,
    });

    if (!params.p) {
        return null;
    }

    try {
        const phoneDecoded = Base64.decode(params.p);

        const mask = new StringMask('+0 (000) 000-00-00');

        const phoneMasked = mask.apply(phoneDecoded);

        if (!phoneNumberMask.test(phoneMasked)) {
            return null;
        }

        return phoneMasked;
    } catch (e) {
        return null;
    }

};

const getPassportIssuedByUnitCode = async unitCode => {
    const response = await fetch(`${DADATA_API_URL}/findById/fms_unit`, {
        method: 'post',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Token ${DADATA_KEY}`,
        }),
        body: JSON.stringify({
            query: unitCode,
            count: 1,
        }),
    });

    const jsonData = await response.json();

    return jsonData.suggestions[0].value;
};

export default {
    getCurrentCreditGoal,
    getStepState,
    getActiveLinePercent,
    checkIsDisableCommonInfoElement,
    convertDadataAddress,
    getPhoneFromQueryParams,
    getPassportIssuedByUnitCode,
};
