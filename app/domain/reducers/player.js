import { Map, Set } from 'immutable';
import { UPDATE_LIKED_GAMES } from '../constants';

const initialState = Map({
  username: '',
  token: '',
  likedGames: Set(),
  dislikedGames: Set(),
});

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIKED_GAMES:
      return state.update('likedGames', (set) => set.add(action.gameId));
    default:
      return state;
  }
}

export default playerReducer;
