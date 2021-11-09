import { connect } from 'react-redux';
import { show } from 'redux-modal';

import MainLayout from './MainLayout';
import { operations } from '~/app/init/duck';
import { modals } from '~/app/offer-modal';
import { routes } from '../common/constants';

const mapStateToProps = state => ({
    isPrivacyPolicyPage: state.router.location.pathname === routes.PRIVACY_POLICY,
});

const mapDispatchToProps = dispatch => ({
    fetchInitialData: () => dispatch(operations.fetch()),
    showOfferModal: () => dispatch(show(modals.OFFER_MODAL)),
});

const MainLayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainLayout);

export default MainLayoutContainer;
