import { connect } from 'react-redux';

import Input from './Input';
import { actionCreators } from './duck';

const mapStateToProps = state => ({
    moneyCount: state.getMoneySection.moneyCount
});

const mapDispatchToProps = dispatch => ({
    setMoneyCount: moneyCount => dispatch(actionCreators.descriptionSetMoneyCount(moneyCount))
});

const InputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);

export default InputContainer;
