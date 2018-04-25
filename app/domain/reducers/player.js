import { Map, Set } from 'immutable';
import { UPDATE_LIKED_GAMES, LOAD_RECOMMENDATIONS } from '../constants';

const initialState = Map({
  username: '',
  token: '',
  likedGames: Set(),
  dislikedGames: Set(),
  recommendedGames: Set(),
});

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIKED_GAMES:
      return state.update('likedGames', (set) => set.add(action.gameId));
    case LOAD_RECOMMENDATIONS:
      return state.set('recommendedGames', Set(action.recommendations));
    default:
      return state;
  }
}

export default playerReducer;
