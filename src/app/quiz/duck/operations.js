import qs from 'qs';
import {SubmissionError} from 'redux-form'
import isString from 'lodash-es/isString';
import each from 'lodash-es/each';
import BrowsingModeDetector from 'js-detect-incognito-private-browsing';
import moment from 'moment-timezone';
import uuidv4 from 'uuid/v4'

import {metricaUser, ipDetector} from '~/app/common';
import REST from './rest';
import {Creators} from './actions';
import {defaultFetchingStatuses} from '~/app/common/constants';
import formFields from './form-fields';
import { education } from '~/app/common/dictionaries';
import mobilePhoneCheckStatuses from './mobilePhoneCheckStatuses';
import selectors from './selectors';
import { Creators as AmplitudeCreators } from '~/app/amplitude/duck';
import { events } from '~/app/amplitude-quiz/duck';
import { parsers } from '~/app/common/input-mask';

const sendApplication = (data, fieldsMeta) => async (dispatch, getState) => {
    const state = getState();

    const applicationIsCreating = state.quiz.application.isCreating;

    if (applicationIsCreating) {
        return;
    }

    dispatch(Creators.quizApplicationIsCreating(true));

    try {
        const requestData = {
            ...data,
            address: selectors.convertDadataAddress(data[formFields.LIVING_ADDRESS]),
            passportSeries: parsers.getDigits(data[formFields.PASSPORT_SERIES]),
            passportNumber: parsers.getDigits(data[formFields.PASSPORT_NUMBER]),
            [formFields.LOAN_DURATION]: data[formFields.LOAN_DURATION] * 12,
        };

        delete requestData[formFields.LIVING_STREET];
        delete requestData[formFields.LIVING_CITY];

        if (!requestData[formFields.SUM]) {
            requestData[formFields.SUM] = state.getMoneySection.moneyCount;
        }

        if (!requestData[formFields.LOAN_DURATION]) {
            requestData[formFields.LOAN_DURATION] = 36; // ToDo: Hardcode!!! Make default value in OMS.
        }

        if (!requestData[formFields.SALARY_LEVEL]) {
            requestData[formFields.SALARY_LEVEL] = 50000; // ToDo: Hardcode!!! Make default value in OMS.
        }

        if (!requestData[formFields.EDUCATION]) {
            requestData[formFields.EDUCATION] = education.HIGHER; // ToDo: Hardcode!!! Make default value in OMS.
        }

        if (data.loanAmount < 100) {
            requestData.loanAmount = 100;
        }

        if (data.loanAmount > 100000000) {
            requestData.loanAmount = 100000000;
        }

        const queryParams = qs.parse(window.location.search, {
            ignoreQueryPrefix: true
        });

        requestData.tags = queryParams;

        requestData.tags.ya_metrik_mapper_id = metricaUser.getID();

        if (requestData.tags[formFields.UTM_SOURCE] === LEADGID_UTM_SOURCE && queryParams.wm_id && queryParams.clickid) {
            requestData.tags[formFields.UTM_SOURCE] += queryParams.wm_id;

            requestData.tags.leadgid = {
                avd_sub: uuidv4(),
                transaction_id: queryParams.clickid
            };
        }

        delete requestData[formFields.LIVING_ADDRESS];
        delete requestData[formFields.CONFIRMATION_CODE];
        delete requestData[formFields.PHONE_NUMBER];
        delete requestData[formFields.UTM_SOURCE];

        const browsingModeDetector = new BrowsingModeDetector();

        requestData.phoneConfirmationId = state.quiz.confirmationCode.sessionID;

        browsingModeDetector.do(async browsingInIncognitoMode => {
            const pastedFields = [];

            each(fieldsMeta, (fieldMetaValue, fieldMetaKey) => {
                if (fieldMetaValue.isPasted) {
                    pastedFields.push(fieldMetaKey);
                }
            });

            requestData.tags.kviku = {
                pastedFields: pastedFields,
                userAgent: window.navigator.userAgent,
                timezone: moment.tz.guess(),
                timestamp: moment.tz().format('x'),
                uid: state.kviku.id,
                clientIP: await ipDetector.detect(),
                browsingInIncognitoMode: browsingInIncognitoMode
            };

            const responseBody = await REST.sendApplication(requestData);

            const response = await responseBody.json();

            window.location.replace(`${ACCOUNT_URL}/register/by/appId/${response.appId}`);
        });
    } catch (e) {
        dispatch(Creators.quizApplicationIsCreating(false));

        alert('Error!');
    }
};

const sendConfirmationCode = (phone, formData, onSubmit) => async (dispatch, getState) => {
    const isMobilePhoneExists = await dispatch(checkMobilePhoneExists(phone));

    if (isMobilePhoneExists === mobilePhoneCheckStatuses.EXISTS) {
        onSubmit(formData);
        return;
    }

    const state = getState();

    if (state.quiz.confirmationCode.sendingStatus === defaultFetchingStatuses.IN_PROGRESS) {
        return;
    }

    dispatch(Creators.quizConfirmationCodeSendingChangeStatus(defaultFetchingStatuses.IN_PROGRESS));

    let response;

    try {
        const phoneNormalized = parsers.getDigits(phone);

        response = await REST.sendConfirmationCode(phoneNormalized);
    } catch (e) {
        dispatch(Creators.quizConfirmationCodeSendingChangeStatus(defaultFetchingStatuses.FAILED));

        dispatch(AmplitudeCreators.amplitudeEvent({
            name: events.SMS_PHONE_SENDING_SERVER_ERROR,
            props: {},
        }));

        throw new SubmissionError({
            [formFields.PHONE_NUMBER]: 'Произошла ошибка'
        });
    }

    const data = await response.json();

    if (response.status == 200 && isString(data.id)) {
        dispatch(Creators.quizConfirmationCodeSetSessionId(data.id));
        dispatch(Creators.quizConfirmationCodeSendingChangeStatus(defaultFetchingStatuses.SUCCESS));

        dispatch(AmplitudeCreators.amplitudeEvent({
            name: events.SMS_PHONE_SENDING_SUCCESS,
            props: {},
        }));

        onSubmit(formData);
    } else {
        dispatch(Creators.quizConfirmationCodeSendingChangeStatus(defaultFetchingStatuses.FAILED));

        dispatch(AmplitudeCreators.amplitudeEvent({
            name: events.SMS_PHONE_SENDING_SERVER_ERROR,
            props: {},
        }));

        throw new SubmissionError({
            [formFields.PHONE_NUMBER]: 'Произошла ошибка'
        });
    }
};

const confirmCode = (code, formData, onSubmit) => async (dispatch, getState) => {
    const state = getState();

    if (state.quiz.confirmationCode.confirmationStatus === defaultFetchingStatuses.IN_PROGRESS) {
        return;
    }

    dispatch(Creators.quizConfirmationCodeConfirmChangeStatus(defaultFetchingStatuses.IN_PROGRESS));

    let response;

    try {
        response = await REST.confirmCode(state.quiz.confirmationCode.sessionID, code);
    } catch (e) {
        dispatch(Creators.quizConfirmationCodeConfirmChangeStatus(defaultFetchingStatuses.FAILED));

        dispatch(AmplitudeCreators.amplitudeEvent({
            name: events.SMS_PHONE_CONFIRM_SERVER_ERROR,
            props: {},
        }));

        throw new SubmissionError({
            [formFields.CONFIRMATION_CODE]: 'Произошла ошибка'
        })
    }

    if (response.status == 200) {
        dispatch(Creators.quizConfirmationCodeConfirmChangeStatus(defaultFetchingStatuses.SUCCESS));

        dispatch(AmplitudeCreators.amplitudeEvent({
            name: events.SMS_PHONE_CONFIRM_SUCCESS,
            props: {},
        }));

        onSubmit(formData);
    } else {
        dispatch(Creators.quizConfirmationCodeConfirmChangeStatus(defaultFetchingStatuses.FAILED));

        dispatch(AmplitudeCreators.amplitudeEvent({
            name: events.SMS_PHONE_CONFIRM_ERROR,
            props: {},
        }));

        throw new SubmissionError({
            [formFields.CONFIRMATION_CODE]: 'Некорректный одноразовый пароль'
        });
    }
};

const checkMobilePhoneExists = mobilePhone => async dispatch => {
    dispatch(Creators.quizMobilePhoneCheckerChangeStatus(mobilePhoneCheckStatuses.IN_PROGRESS));

    try {
        const mobilePhoneNormalized = parsers.getDigits(mobilePhone);

        const response = await REST.checkMobilePhoneExists(mobilePhoneNormalized);

        const responseJSON = await response.json();

        if (responseJSON.exists) {
            dispatch(Creators.quizMobilePhoneCheckerChangeStatus(mobilePhoneCheckStatuses.EXISTS));

            return mobilePhoneCheckStatuses.EXISTS;
        } else {
            dispatch(Creators.quizMobilePhoneCheckerChangeStatus(mobilePhoneCheckStatuses.NOT_EXISTS));

            return mobilePhoneCheckStatuses.NOT_EXISTS;
        }
    } catch (e) {
        dispatch(Creators.quizMobilePhoneCheckerChangeStatus(mobilePhoneCheckStatuses.FAILED));

        return mobilePhoneCheckStatuses.FAILED;
    }
};

export default {
    sendApplication,
    sendConfirmationCode,
    confirmCode,
    checkMobilePhoneExists
};
