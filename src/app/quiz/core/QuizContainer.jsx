import { connect } from 'react-redux';

import Quiz from './Quiz';

const mapStateToProps = state => ({
    activeStep: state.quiz.activeStep,
    initFetchStatus: state.init.fetchingStatus
});

const QuizContainer = connect(
    mapStateToProps
)(Quiz);

export default QuizContainer;
