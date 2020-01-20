import { combineReducers } from "redux";
import { START } from "./actions";

const game = (state = false, action) => {
  switch (action.type) {
    case START:
        console.log(action)
      return action.payload.status;
    default:
      return state;
  }
};

export default combineReducers({
    game
  });
  
