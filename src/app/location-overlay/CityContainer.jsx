import { connect } from 'react-redux';

import City from './City';
import { actionCreators } from './duck';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    hideOverlay: () => dispatch(actionCreators.toggleOverlay(false)),
    locationOverlaySelectRegion: (title, fiasID) => dispatch(actionCreators.locationOverlaySelectRegion(title, fiasID))
});

const CityContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(City);

export default CityContainer;
