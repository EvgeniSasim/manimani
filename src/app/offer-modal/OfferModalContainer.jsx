import {connectModal} from 'redux-modal';

import OfferModal from './OfferModal';
import { modals } from './duck';

const OfferModalContainer = connectModal({
    name: modals.OFFER_MODAL,
    destroyOnHide: false
})(OfferModal);

export default OfferModalContainer;
