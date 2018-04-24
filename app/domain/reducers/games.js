import { fromJS } from 'immutable';
import gameReducer from './game';
import { LOAD_GAME_LIST } from '../constants';

const initialState = fromJS([]);

function gamesReducer(state = initialState, action) {
  switch (action) {
    case LOAD_GAME_LIST:
      return action.gameList;
    default:
      return state.map((game) => gameReducer(game, action));
  }
}

export default gamesReducer;
