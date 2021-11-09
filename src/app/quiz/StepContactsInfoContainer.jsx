import { connect } from 'react-redux';

import StepContactsInfo from './StepContactsInfo';
import { sendStepOne } from '../bizagi/duck/operations';

const mapStateToProps = (state)=>({
    formValues: state.form.QUIZ_FORM.values
});

const mapDispatchToProps = dispatch => ({
    bizagiSendStepOne: () => dispatch(sendStepOne()),
});

const StepContactsInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StepContactsInfo);

export default StepContactsInfoContainer;
