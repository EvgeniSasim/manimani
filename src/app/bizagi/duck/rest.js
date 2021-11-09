import { fetch } from '~/app/common';

export const REST = {
    stepOne: data => fetch('/api/bizagi/stepOne', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
};
