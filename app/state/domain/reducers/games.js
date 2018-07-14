import { LOAD_GAME_LIST } from '../constants';

const initialState = [];

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAME_LIST:
      return action.gameList;
    default:
      return state;
  }
}

export default gamesReducer;
