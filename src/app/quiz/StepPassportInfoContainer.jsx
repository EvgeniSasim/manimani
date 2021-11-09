import { connect } from 'react-redux';
import { change } from 'redux-form';

import { forms, formFields } from './duck';
import StepPassportInfo from './StepPassportInfo';
import {sendAnalytics} from "../google-analytics/duck/operations";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    setPassportIssued: value => dispatch(change(forms.QUIZ_FORM, formFields.PASSPORT_ISSUED, value)),
    sendAnalytics: () => dispatch(sendAnalytics()),
});

const StepPassportInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StepPassportInfo);

export default StepPassportInfoContainer;
