import { connect } from 'react-redux';

import Step4 from './Step4';

const mapStateToProps = state => ({
    educationDictionary: state.init.data.education
});

const Step4Container = connect(
    mapStateToProps
)(Step4);

export default Step4Container;
