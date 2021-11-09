import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as modalReducer } from 'redux-modal';
import set from 'lodash-es/set';

import { reducer as getMoneySectionReducer } from '~/app/get-money-section/duck';
import {
    reducer as quizReducer,
    actionTypes as quizActionTypes,
    forms as quizForms
} from '~/app/quiz/duck';
import { reducer as creditGoalReducer } from '~/app/credit-goal/duck';
import { reducer as overlayReducer } from '~/app/location-overlay/duck';
import { reducer as initRuducer } from '~/app/init/duck';
import { reducer as headerRuducer } from '~/app/header/duck';
import { reducer as kvikuReducer } from '~/app/kviku';
import { reducer as amplitudeReducer } from '~/app/amplitude/duck';
import { reducer as amplitudeQuizReducer } from '~/app/amplitude-quiz/duck';
import { reducer as bizagiReducer } from '~/app/bizagi/duck';

const reducers = combineReducers({
    form: formReducer.plugin({
        [quizForms.QUIZ_FORM]: (state, action) => {
            if (action.type === quizActionTypes.QUIZ_SET_FIELD_PASTED) {
                set(state, `fields.${action.fieldName}.isPasted`, action.isPasted);
            }

            return state;
        }
    }),
    modal: modalReducer,
    getMoneySection: getMoneySectionReducer,
    quiz: quizReducer,
    creditGoal: creditGoalReducer,
    overlay: overlayReducer,
    init: initRuducer,
    header: headerRuducer,
    kviku: kvikuReducer,
    amplitude: amplitudeReducer,
    amplitudeQuiz: amplitudeQuizReducer,
    bizagi: bizagiReducer,
});

export default reducers;
