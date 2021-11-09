import { connect } from 'react-redux';

import {formFields, forms, operations} from './duck';
import StepSendCode from './StepSendCode';
import {formValueSelector} from "redux-form";

const formSelector = formValueSelector(forms.QUIZ_FORM);

const mapStateToProps = state => ({
    phoneNumber: formSelector(state, formFields.PHONE_NUMBER),
    mobilePhoneExistanceStatus: state.quiz.mobilePhoneChecker.status
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    sendConfirmationCode: formData => dispatch(operations.sendConfirmationCode(formData[formFields.PHONE_NUMBER], formData, ownProps.onSubmit))
});

const StepSendCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    (stateProps, dispatchProps, ownProps) => Object.assign({}, ownProps, stateProps, dispatchProps),
    { withRef: true }
)(StepSendCode);

export default StepSendCodeContainer;
