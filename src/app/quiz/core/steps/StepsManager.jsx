import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectProps } from 'react-decoration';
import { Box } from 'grid-styled';
import isFunction from 'lodash-es/isFunction';
import isEmpty from 'lodash-es/isEmpty';

import { routes } from '~/app/common/constants';
import { metricaUser } from '~/app/common';
import { rest, formFields, constants, forms, selectors } from '../../duck';
import { selectors as refSelectors } from '~/app/ref';
import {gender} from '~/app/common/dictionaries';
import { events } from '~/app/amplitude-quiz/duck';
import { trackEvent } from '~/app/amplitude/duck';

class StepsManager extends Component {
    constructor() {
        super();

        this.ref = React.createRef();
    }

    componentDidMount() {
        if (selectors.getPhoneFromQueryParams()) {
            trackEvent(events.LANDING_PHONE_SUBSTITUTE);
        }
    }

    @injectProps
    componentDidUpdate({
        isValid,
        steps,
        activeStep,
        quizActivateStep,
        replace,
        fidInitialized,
        formInitialValues,
        quizToggleFidSetInitialized,
        change
    }) {
        if (!isEmpty(formInitialValues) && !fidInitialized) {
            if (this.isLastStep(activeStep, steps)) {
                quizToggleFidSetInitialized();
                change(forms.QUIZ_FORM, formFields.CONFIRMATION_CODE, '');
                this.goToPrevStep(steps, activeStep, quizActivateStep, replace);
            } else if (isValid()) {
                this.activateNextStep(steps, activeStep, quizActivateStep);
            } else {
                quizToggleFidSetInitialized();
                this.goToPrevStep(steps, activeStep, quizActivateStep, replace);
            }
        }
    }

    activateNextStep(steps, activeStep, quizActivateStep) {
        activeStep.step = activeStep.innerStep < steps[activeStep.step - 1].length ? activeStep.step : activeStep.step + 1;
        activeStep.innerStep = activeStep.innerStep < steps[activeStep.step - 1].length ? activeStep.innerStep + 1 : 1;

        const nextStep = {
            step: activeStep.step,
            innerStep: activeStep.innerStep,
        };

        this.props.setSubmitErrors({});

        quizActivateStep(nextStep.step, nextStep.innerStep);
    };

    goToPrevStep(steps, activeStep, quizActivateStep, replace) {
        const isFirst = activeStep.step === 1 && activeStep.innerStep === 1;

        this.props.setSubmitErrors({});

        if (isFirst) {
            replace(routes.ROOT + window.location.search);
        } else {
            const prevStep = activeStep.innerStep > 1 ? {
                step: activeStep.step,
                innerStep: activeStep.innerStep - 1,
            } : {
                step: activeStep.step - 1,
                innerStep: steps[activeStep.step - 2].length,
            };

            quizActivateStep(prevStep.step, prevStep.innerStep);
        }
    };

    isLastStep(activeStep, steps) {
        return activeStep.step === steps.length && activeStep.innerStep === steps[steps.length - 1].length;
    };

    @injectProps
    render({
        quizActivateStep,
        activeStep,
        replace,
        sendApplication,
        steps,
        formMeta,
        formInitialValues,
        isValid,
        moneySectionMoneyCount,
        formValues,
        ...props
    }) {
        const ActiveStep = steps[activeStep.step - 1][activeStep.innerStep - 1];

        const goToNextStep = async data => {
            try {
                const instance = this.ref.getWrappedInstance();

                /*
                  onGoingToNextStep - callback for doing some manipulations before going to the next step and deciding
                  go or not
                 */
                if (isFunction(instance.wrappedInstance.onGoingToNextStep) && !await instance.wrappedInstance.onGoingToNextStep()) {
                    return;
                }
            } catch(e) {
                // If can't get wrapper instance - do nothing
            }

            window.yaCounter45302445 && window.yaCounter45302445.reachGoal(`B1_${activeStep.step + 1}_${activeStep.innerStep}`);

            try {
                rest.updateData(metricaUser.getID(), refSelectors.getRefId(), data);
            } catch(e) {}

            if (this.isLastStep(activeStep, steps)) {
                sendApplication(data, formMeta);
            } else {
                this.activateNextStep(steps, activeStep, quizActivateStep);
            }
        };

        return (
            <Box {...props}>
                <ActiveStep
                    ref={componentRef => this.ref = componentRef}
                    onSubmit={goToNextStep}
                    onPrevButtonClick={() => this.goToPrevStep(steps, activeStep, quizActivateStep, replace)}
                    initialValues={{
                        [formFields.SUM]: moneySectionMoneyCount,
                        // Addition of value in other place rewrites the initial values
                        [formFields.EDUCATION]: "higher",
                        [formFields.LOAN_DURATION]: 3,
                        [formFields.SALARY_LEVEL]: 80000,
                        [formFields.GENDER]: gender.MALE,
                        [formFields.PHONE_NUMBER]: selectors.getPhoneFromQueryParams(),
                        ...formInitialValues,
                        ...formValues
                    }}
                    withRef={true}
                />
            </Box>
        );
    }
}

StepsManager.propTypes = {
    quizActivateStep: PropTypes.func.isRequired,
    activeStep: PropTypes.shape({
        step: PropTypes.number,
        innerStep: PropTypes.number,
    }).isRequired,
    push: PropTypes.func.isRequired,
};

export default StepsManager;
