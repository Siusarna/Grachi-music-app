import { combineReducers } from "redux";
import { START, SONG_RESPONSE } from "./actions";

const game = (state = false, action) => {
  switch (action.type) {
    case START:
      return action.payload.status;
    default:
      return state;
  }
};

const songs = (state = { data: '', received: false }, action) => {
  switch (action.type) {
    case SONG_RESPONSE:
      return {...action.payload, received: true};
    default:
      return state;
  }
};

export default combineReducers({
  game,
  songs
});
