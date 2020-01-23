export const START = 'START';
export const SONG_RESPONSE = 'SONG_RESPONSE';
export const GUESSED = 'GUESSED';
export const GIVE_CHANCE = 'GIVE_CHANCE';
export const FINISH = 'FINISH';
export const END = 'END';
export const GUESS_END = "GUESS_END"
export const ADD_TO_HISTORY = "ADD_TO_HISTORY"
export const CLEAR_HISTORY = "CLEAR_HISTORY"

export const start = (status) => ({
    type: START,
    payload: {status}
})

export const songResponse = (data) => ({
    type: SONG_RESPONSE,
    payload: {data}
})

export const guessed = () => ({
    type: GUESSED
})

export const giveChance = () => ({
    type: GIVE_CHANCE
})

export const finish = () => ({
    type: FINISH
})

export const end = () => ({
    type: END
})

export const guessEnd = () => ({
    type: GUESS_END
})

export const addToHistory = (data) => ({
    type: ADD_TO_HISTORY,
    payload: data
})
