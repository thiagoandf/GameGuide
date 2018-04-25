import { Set } from 'immutable';
import gameReducer from './game';
import { LOAD_GAME_LIST } from '../constants';

const initialState = Set();

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAME_LIST:
      return Set(action.gameList);
    default:
      return state.map((game) => gameReducer(game, action));
  }
}

export default gamesReducer;
