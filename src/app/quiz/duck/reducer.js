import { createReducer } from 'reduxsauce';

import { Types } from './actions';
import { defaultFetchingStatuses } from '~/app/common/constants';
import mobilePhoneCheckStatuses from './mobilePhoneCheckStatuses';

const initialState = {
    fidInitialized: false,
    application: {
        isCreating: false
    },
    confirmationCode: {
        sessionID: '',
        sendingStatus: defaultFetchingStatuses.NONE,
        confirmationStatus: defaultFetchingStatuses.NONE
    },
    activeStep: {
        step: 1,
        innerStep: 1
    },
    mobilePhoneChecker: {
        status: mobilePhoneCheckStatuses.NONE
    }
};

export const quizActivateStep = (state = initialState, action) => ({
    ...state,
    activeStep: {
        ...state.activeStep,
        step: action.step,
        innerStep: action.innerStep
    }
});

export const quizConfirmationCodeSendingChangeStatus = (state = initialState, action) => ({
    ...state,
    confirmationCode: {
        ...state.confirmationCode,
        sendingStatus: action.status
    }
});

export const quizConfirmationCodeConfirmChangeStatus = (state = initialState, action) => ({
    ...state,
    confirmationCode: {
        ...state.confirmationCode,
        confirmationStatus: action.status
    }
});

export const quizConfirmationCodeSetSessionId = (state = initialState, action) => ({
    ...state,
    confirmationCode: {
        ...state.confirmationCode,
        sessionID: action.sessionID
    }
});

export const quizApplicationIsCreating = (state = initialState, action) => ({
    ...state,
    application: {
        ...state.application,
        isCreating: action.isCreating
    }
});

export const quizMobilePhoneCheckerChangeStatus = (state = initialState, action) => ({
    ...state,
    mobilePhoneChecker: {
        ...state.mobilePhoneChecker,
        status: action.status
    }
});

export const quizToggleFidInitialized = (state = initialState, action) => ({
    ...state,
    fidInitialized: action.isInitialized
});

export const handlers = {
    [Types.QUIZ_ACTIVATE_STEP]: quizActivateStep,
    [Types.QUIZ_CONFIRMATION_CODE_SENDING_CHANGE_STATUS]: quizConfirmationCodeSendingChangeStatus,
    [Types.QUIZ_CONFIRMATION_CODE_CONFIRM_CHANGE_STATUS]: quizConfirmationCodeConfirmChangeStatus,
    [Types.QUIZ_CONFIRMATION_CODE_SET_SESSION_ID]: quizConfirmationCodeSetSessionId,
    [Types.QUIZ_APPLICATION_IS_CREATING]: quizApplicationIsCreating,
    [Types.QUIZ_MOBILE_PHONE_CHECKER_CHANGE_STATUS]: quizMobilePhoneCheckerChangeStatus,
    [Types.QUIZ_TOGGLE_FID_INITIALIZED]: quizToggleFidInitialized
};

export default createReducer(initialState, handlers);
