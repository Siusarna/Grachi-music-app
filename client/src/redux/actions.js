export const START = 'START';

export const SONG_RESPONSE = 'SONG_RESPONSE'


export const start = (status) => ({
    type: START,
    payload: {status}
})

export const songResponse = (data) => ({
    type: SONG_RESPONSE,
    payload: {data}
})
