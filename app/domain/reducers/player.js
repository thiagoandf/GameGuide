import { Map, Set } from 'immutable';
import {
  UPDATE_LIKED_GAMES,
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
  UPDATE_LOGIN_EMAIL,
  UPDATE_LOGIN_PASSWORD,
} from '../constants';

const initialState = Map({
  email: '',
  password: '',
  token: '',
  likedGames: Set(),
  dislikedGames: Set(),
  recommendedGames: Set(),
});

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIKED_GAMES:
      return state.update('likedGames', set => set.add(action.gameId));
    case LOAD_RECOMMENDATIONS:
      return state.set('recommendedGames', Set(action.recommendations));
    case UPDATE_LOGIN_EMAIL:
      return state.set('email', action.email);
    case UPDATE_LOGIN_PASSWORD:
      return state.set('password', action.password);
    case LOAD_TOKEN:
      return state.set('token', action.token);
    default:
      return state;
  }
}

export default playerReducer;
