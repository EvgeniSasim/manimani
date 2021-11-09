import { connect } from 'react-redux';

import Layout from './Layout';
import { operations } from '~/app/init/duck';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    fetchInitialData: () => dispatch(operations.fetch())
});

const LayoutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Layout);

export default LayoutContainer;
