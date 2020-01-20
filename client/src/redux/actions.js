export const START = 'START';

export const start = (status) => ({
    type: START,
    payload: {status}
})