import { connect } from 'react-redux';
import has from 'lodash-es/has';

import { constants, formFields } from '~/app/quiz/duck';
import MainQuiz from './MainQuiz';

const mapStateToProps = state => ({
    moneyCount: has(state.form[constants.FORM_NAME], `values.${formFields.SUM}`)
        ? state.form[constants.FORM_NAME].values[formFields.SUM]
        : null,
    firstName: has(state.form[constants.FORM_NAME], `values.${formFields.FIRST_NAME}`)
        ? state.form[constants.FORM_NAME].values[formFields.FIRST_NAME]
        : null,
    lastName: has(state.form[constants.FORM_NAME], `values.${formFields.LAST_NAME}`)
        ? state.form[constants.FORM_NAME].values[formFields.LAST_NAME]
        : null
});

const QuizContainer = connect(
    mapStateToProps
)(MainQuiz);

export default QuizContainer;
