import { LOAD_GAME_LIST } from '../constants';

const initialState = {};

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GAME_LIST:
      return loadGameAsMap(action.gameList);
    default:
      return state;
  }
}

const loadGameAsMap = array => {
  const map = {};
  array.forEach(game => {
    map[game.id] = game;
  });
  return map;
};

export default gamesReducer;
