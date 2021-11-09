import { connect } from 'react-redux';

import LocationOverlay from './LocationOverlay';
import { actionCreators } from './duck';

const mapStateToProps = state => ({
    regionsFetchingStatus: state.init.fetchingStatus,
    regions: state.init.data.regions
});

const mapDispatchToProps = dispatch => ({
    hideOverlay: () => dispatch(actionCreators.toggleOverlay(false)),
    locationOverlaySelectRegion: (title, fiasID) => dispatch(actionCreators.locationOverlaySelectRegion(title, fiasID))
});

const LocationOverlayContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationOverlay);

export default LocationOverlayContainer;
