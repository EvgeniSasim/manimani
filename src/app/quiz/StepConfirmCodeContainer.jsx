import { connect } from 'react-redux';

import { formFields, operations } from './duck';
import StepConfirmCode from './StepConfirmCode';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    confirmCode: formData => dispatch(operations.confirmCode(formData[formFields.CONFIRMATION_CODE], formData, ownProps.onSubmit))
});

const StepConfirmCodeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(StepConfirmCode);

export default StepConfirmCodeContainer;
