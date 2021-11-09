import { connect } from 'react-redux';

import Amplitude from './Amplitude';
import { forms } from '~/app/quiz/duck';

const mapStateToProps = state => ({
    event: state.amplitude.event,
    userProps: state.amplitude.userProps,
});

const AmplitudeContainer = connect(
    mapStateToProps,
)(Amplitude);

export default AmplitudeContainer;
