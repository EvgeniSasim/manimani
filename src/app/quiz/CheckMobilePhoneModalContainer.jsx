import {connectModal} from 'redux-modal';

import CheckMobilePhoneModal from './CheckMobilePhoneModal';
import {modals} from './duck';

const CheckMobilePhoneModalContainer = connectModal({
    name: modals.CHECK_MOBILE_PHONE,
    destroyOnHide: false
})(CheckMobilePhoneModal);

export default CheckMobilePhoneModalContainer;
