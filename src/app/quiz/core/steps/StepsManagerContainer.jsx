import { connect } from 'react-redux';
import { replace } from 'connected-react-router';
import { getFormMeta, isValid, getFormValues, change } from 'redux-form';

import StepsManager from './StepsManager';
import { actionCreators, operations, forms } from '../../duck';
import { Creators as AmplitudeQuizCreators } from '~/app/amplitude-quiz/duck';

const mapStateToProps = state => ({
    activeStep: state.quiz.activeStep,
    formMeta: getFormMeta(forms.QUIZ_FORM)(state),
    formInitialValues: state.init.data.landingData,
    fidInitialized: state.quiz.fidInitialized,
    moneySectionMoneyCount: state.getMoneySection.moneyCount,
    formValues: getFormValues(forms.QUIZ_FORM)(state),
    state: state
});

const mapDispatchToProps = dispatch => ({
    quizActivateStep: (step, innerStep) => dispatch(actionCreators.quizActivateStep(step, innerStep)),
    sendApplication: (data, fieldsMeta) => dispatch(operations.sendApplication(data, fieldsMeta)),
    replace: (...args) => dispatch(replace(...args)),
    quizToggleFidSetInitialized: () => dispatch(actionCreators.quizToggleFidInitialized(true)),
    change: (...args) => dispatch(change(...args)),
    setSubmitErrors: errors => dispatch(AmplitudeQuizCreators.amplitudeFormErrors(errors)),
});

const StepsManagerContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
    (stateProps, dispatchProps, ownProps) => ({
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        isValid: () => isValid(forms.QUIZ_FORM)(stateProps.state)
    })
)(StepsManager);

export default StepsManagerContainer;
