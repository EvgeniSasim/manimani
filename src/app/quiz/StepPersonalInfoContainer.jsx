import {connect} from 'react-redux';
import {show} from 'redux-modal';
import {formValueSelector} from 'redux-form';

import {modals} from '~/app/offer-modal';
import StepPersonalInfo from './StepPersonalInfo';
import {formFields, forms, operations} from './duck';
import {modals as duckModals} from './duck';

const formSelector = formValueSelector(forms.QUIZ_FORM);

const mapStateToProps = state => ({
    phoneNumber: formSelector(state, formFields.PHONE_NUMBER)
});

const mapDispatchToProps = dispatch => ({
    showOfferModal: () => dispatch(show(modals.OFFER_MODAL)),
    checkMobilePhoneExists: mobilePhone => dispatch(operations.checkMobilePhoneExists(mobilePhone)),
    showCheckMobilePhoneModal: mobilePhone => dispatch(show(duckModals.CHECK_MOBILE_PHONE, {
        mobilePhone: mobilePhone
    }))
});

const StepPersonalInfoContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    (stateProps, dispatchProps, ownProps) => Object.assign({}, ownProps, stateProps, dispatchProps),
    { withRef: true }
)(StepPersonalInfo);

export default StepPersonalInfoContainer;
