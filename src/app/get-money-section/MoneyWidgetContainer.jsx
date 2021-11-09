import { connect } from 'react-redux';

import MoneyWidget from './MoneyWidget';

const mapStateToProps = state => ({
    moneyCount: state.getMoneySection.moneyCount
});

const MoneyWidgetContainer = connect(
    mapStateToProps
)(MoneyWidget);

export default MoneyWidgetContainer;
