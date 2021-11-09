import { connect } from 'react-redux';

import AnswerInputMaskField from './AnswerInputMaskField';
import { actionCreators } from '../../duck';

const mapDispatchToProps = dispatch => ({
    quizSetFieldPasted: (fieldName, isPasted) => dispatch(actionCreators.quizSetFieldPasted(fieldName, isPasted))
});

const AnswerInputMaskFieldContainer = connect(
    null,
    mapDispatchToProps
)(AnswerInputMaskField);

export default AnswerInputMaskFieldContainer;
