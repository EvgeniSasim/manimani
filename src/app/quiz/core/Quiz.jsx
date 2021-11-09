import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import map from 'lodash-es/map';
import { Element } from 'react-scroll';

import { Hide } from '~/app/common';
import { StepsManagerContainer } from './steps';
import {selectors, constants, formFields} from '../duck';
import StepIndicator from './StepIndicator';
import CommonInfo from './CommonInfo';
import { fetchingStatuses } from '~/app/init/duck';

const Line = styled(Box)`
    height: 1px;
    background-color: #ffffff;
    opacity: 0.2;
`;

const ActiveLine = styled(Box)`
    height: 3px;
    background-color: #ffffff;
`;

const Quiz = ({ className, commonInfoOptions, activeStep, steps, initFetchStatus }) => (
    <Flex
        className={className}
        flexDirection={[ 'column', 'row' ]}
        justifyContent={[ 'space-between', 'center', 'space-between' ]}
        py={[ '27px', '22px', '40px' ]}
    >
        <Flex flexDirection='column' alignItems={[ 'center', 'center', 'flex-start' ]}>
            <Flex alignItems='center' width={[ '320px', '530px', '606px' ]}>
                {map(steps, (step, index) => (
                    <Fragment key={index}>
                        <StepIndicator step={index + 1} state={selectors.getStepState(index + 1, activeStep)} />
                        {index + 1 !== steps.length && (
                            <Fragment>
                                {activeStep.step === index + 1 && activeStep.step !== steps.length && (
                                    <Flex flex={1} mx='10px' alignItems='center'>
                                        <ActiveLine
                                            width={`${selectors.getActiveLinePercent(activeStep.innerStep, step.length)}%`}
                                        />
                                        <Line flex='1' />
                                    </Flex>
                                )}
                                {index + 1 < activeStep.step && (
                                    <ActiveLine flex='1' mx='10px' />
                                )}
                                {index + 1 > activeStep.step && (
                                    <Line flex='1' mx='10px' />
                                )}
                            </Fragment>
                        )}
                    </Fragment>
                ))}
            </Flex>
            <Hide desk>
                <Box mt={[ '16px', '39px', '16px' ]}>
                    <CommonInfo {...commonInfoOptions} activeStep={activeStep} />
                </Box>
            </Hide>
            <Flex>
                <Element name={constants.FORM_NAME}>
                    {(initFetchStatus === fetchingStatuses.SUCCESS || initFetchStatus === fetchingStatuses.FAILED) && (
                        <StepsManagerContainer mt={[ '25px', '40px', '55px' ]} steps={steps} />
                    )}
                </Element>
            </Flex>
        </Flex>
        <Hide mob tab>
            <CommonInfo {...commonInfoOptions} activeStep={activeStep}/>
        </Hide>
    </Flex>
);

Quiz.propTypes = {
    className: PropTypes.string,
    activeStep: PropTypes.shape({
        step: PropTypes.number,
        innerStep: PropTypes.number
    }).isRequired
};

export default Quiz;
