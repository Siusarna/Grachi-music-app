import { combineReducers } from "redux";
import { START, SONG_RESPONSE, GUESSED, GIVE_CHANCE, FINISH, END, GUESS_END, ADD_TO_HISTORY, CLEAR_HISTORY, START_OVER, PENDING_STATUS } from "./actions";

const game = (state = {status: false, player: 0, server: 0, games: 1, round: 1, results: false}, action) => {
  switch (action.type) {
    case START:
      return {...state, status: true};
    case GUESSED:
      return {...state, server: state.server + 1, games: state.games + 1, round: 1}
    case GIVE_CHANCE: 
      return {...state, round: state.round + 1}
    case FINISH:
      return {...state, player: state.player + 1, games: state.games + 1, round: 1}
    case END: 
      return {...state, results: true}
    case START_OVER:
      return {status: false, player: 0, server: 0, games: 1, round: 1, results: false}
    default:
      return state;
  }
};

const songs = (state = { data: '', received: false, pending: false }, action) => {
  switch (action.type) {
    case SONG_RESPONSE:
      return {...action.payload, received: true, pending: false};
    case GUESS_END:
      return {...state, received: false}
    case PENDING_STATUS: 
      return {...state, pending: true}
    default:
      return state;
  }
};

const songHistory = (state = [], action) => {
    switch(action.type) {
      case ADD_TO_HISTORY:
        return [...state, action.payload]
      case CLEAR_HISTORY:
        return []
      default: 
        return state
    }
}

export default combineReducers({
  game,
  songs,
  songHistory
});
