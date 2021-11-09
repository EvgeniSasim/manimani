import { connect } from 'react-redux';

import Header from './Header';
import { actionCreators } from './duck';

const mapStateToProps = state => ({
    overlayIsShown: state.overlay.isShown,
    mobileMenuIsShown: state.header.mobileMenuIsShown
});

const mapDispatchToProps = dispatch => ({
    toggleMobileMenu: needToBeShown => dispatch(actionCreators.toggleMobileMenu(needToBeShown))
});

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);

export default HeaderContainer;
