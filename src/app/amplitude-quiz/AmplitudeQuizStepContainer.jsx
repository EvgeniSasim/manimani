import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';

import AmplitudeQuizStep from './AmplitudeQuizStep';
import { forms } from '~/app/quiz/duck';
import { selectors } from './duck';
import { Creators as AmplitudeCreators } from '~/app/amplitude/duck';

const mapStateToProps = state => ({
    event: selectors.getEventByStep(state.quiz.activeStep),
    formValues: getFormValues(forms.QUIZ_FORM)(state),
});

const mapDispatchToProps = dispatch => ({
    setEvent: event => dispatch(AmplitudeCreators.amplitudeEvent(event)),
    setUserProps: event => dispatch(AmplitudeCreators.amplitudeUserProps(event)),
});

const AmplitudeQuizStepContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AmplitudeQuizStep);

export default AmplitudeQuizStepContainer;
