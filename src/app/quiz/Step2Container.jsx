import { connect } from 'react-redux';

import { formFields, constants } from '~/app/quiz/duck';
import Step2 from './Step2';

const mapStateToProps = state => ({
    loanAmount: state.form[constants.FORM_NAME].values[formFields.SUM]
});

const Step2Container = connect(
    mapStateToProps
)(Step2);

export default Step2Container;
