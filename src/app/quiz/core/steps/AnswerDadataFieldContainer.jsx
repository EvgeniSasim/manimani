import { connect } from 'react-redux';

import AnswerDadataField from './AnswerDadataField';
import { actionCreators } from '../../duck';

const mapDispatchToProps = dispatch => ({
    quizSetFieldPasted: (fieldName, isPasted) => dispatch(actionCreators.quizSetFieldPasted(fieldName, isPasted))
});

const AnswerDadataFieldContainer = connect(
    null,
    mapDispatchToProps
)(AnswerDadataField);

export default AnswerDadataFieldContainer;
