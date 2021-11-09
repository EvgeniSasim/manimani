import { connect } from 'react-redux';
import has from 'lodash-es/has';

import AmplitudeQuizErrors from './AmplitudeQuizErrors';
import { forms } from '~/app/quiz/duck';
import { selectors, events } from './duck';
import { Creators as AmplitudeCreators } from '~/app/amplitude/duck';

const mapStateToProps = state => ({
    errors: state.amplitudeQuiz.errors,
    event: `${selectors.getEventByStep(state.quiz.activeStep)}_${events.BUTTON_CLICK}`,
    activeFields: has(state.form, [forms.QUIZ_FORM]) ? selectors.getActiveFieldsByRegistered(state.form[forms.QUIZ_FORM].registeredFields) : {},
});

const mapDispatchToProps = dispatch => ({
    setEvent: event => dispatch(AmplitudeCreators.amplitudeEvent(event)),
});

const AmplitudeQuizErrorsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AmplitudeQuizErrors);

export default AmplitudeQuizErrorsContainer;
