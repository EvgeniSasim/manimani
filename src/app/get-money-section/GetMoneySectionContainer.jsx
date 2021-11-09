import { connect } from 'react-redux';

import GetMoneySection from './GetMoneySection';
import { Creators } from '~/app/amplitude/duck';

const mapDispatchToProps = dispatch => ({
    setEvent: event => dispatch(Creators.amplitudeEvent(event)),
    setUserProps: props => dispatch(Creators.amplitudeUserProps(props)),
});

const GetMoneySectionContainer = connect(
    null,
    mapDispatchToProps
)(GetMoneySection);

export default GetMoneySectionContainer;
