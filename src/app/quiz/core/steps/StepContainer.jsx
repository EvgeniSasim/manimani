import { connect } from 'react-redux';
import has from 'lodash-es/has';

import { forms } from '~/app/quiz/duck';
import { Creators as AmplitudeQuizCreators } from '~/app/amplitude-quiz/duck';

import Step from './Step';

const mapStateToProps = (state, ownProps) => ({
    fieldErrors: has(state.form[ownProps.formName], 'syncErrors') ? state.form[ownProps.formName].syncErrors : {},
    applicationIsCreating: state.quiz.application.isCreating,
});

const mapDispatchToProps = dispatch => ({
    setSubmitErrors: errors => dispatch(AmplitudeQuizCreators.amplitudeFormErrors(errors)),
});

const StepContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Step);

export default StepContainer;
