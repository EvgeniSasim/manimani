import { connect } from 'react-redux';

import Kviku from './Kviku';

const mapStateToProps = state => ({
    id: state.kviku.id
});

const KvikuContainer = connect(
    mapStateToProps
)(Kviku);

export default KvikuContainer;
