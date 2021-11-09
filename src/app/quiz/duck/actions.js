import { createActions } from 'reduxsauce';

const { Creators, Types } = createActions({
    quizActivateStep: ['step', 'innerStep'],
    quizConfirmationCodeSendingChangeStatus: ['status'],
    quizConfirmationCodeSetSessionId: ['sessionID'],
    quizConfirmationCodeConfirmChangeStatus: ['status'],
    quizApplicationIsCreating: ['isCreating'],
    quizMobilePhoneCheckerChangeStatus: ['status'],
    quizSetFieldPasted: ['fieldName', 'isPasted'],
    quizToggleFidInitialized: ['isInitialized']
});

export { Creators, Types };
