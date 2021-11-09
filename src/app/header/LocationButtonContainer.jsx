import { connect } from 'react-redux';

import LocationButton from './LocationButton';
import { actionCreators } from '~/app/location-overlay/duck';

const mapStateToProps = state => ({
    title: state.overlay.selectedRegion.title
});

const mapDispatchToProps = dispatch => ({
    showOverlay: () => dispatch(actionCreators.toggleOverlay(true))
});

const LocationButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LocationButton);

export default LocationButtonContainer;
