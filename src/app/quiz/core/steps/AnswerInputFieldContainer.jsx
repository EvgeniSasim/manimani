import { connect } from 'react-redux';

import AnswerInputField from './AnswerInputField';
import { actionCreators } from '../../duck';

const mapDispatchToProps = dispatch => ({
    quizSetFieldPasted: (fieldName, isPasted) => dispatch(actionCreators.quizSetFieldPasted(fieldName, isPasted))
});

const AnswerInputFieldContainer = connect(
    null,
    mapDispatchToProps
)(AnswerInputField);

export default AnswerInputFieldContainer;
