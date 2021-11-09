import { connect } from 'react-redux';
import has from 'lodash-es/has';

import { forms, formsFields } from '../duck';
import CommonInfo from './CommonInfo';

const fields = formsFields[forms.QUIZ_FORM];

const mapStateToProps = state => ({
    moneyCount: has(state.form[forms.QUIZ_FORM], `values.${fields.SUM}`)
        ? state.form[forms.QUIZ_FORM].values[fields.SUM]
        : null,
    firstName: has(state.form[forms.QUIZ_FORM], `values.${fields.FIRST_NAME}`)
        ? state.form[forms.QUIZ_FORM].values[fields.FIRST_NAME]
        : null,
    lastName: has(state.form[forms.QUIZ_FORM], `values.${fields.LAST_NAME}`)
        ? state.form[forms.QUIZ_FORM].values[fields.LAST_NAME]
        : null
});

const CommonInfoContainer = connect(
    mapStateToProps
)(CommonInfo);

export default CommonInfoContainer;
