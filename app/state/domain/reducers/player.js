import {
  UPDATE_LIKED_GAMES,
  LOAD_RECOMMENDATIONS,
  LOAD_TOKEN,
} from '../constants';

const initialState = {
  email: '',
  password: '',
  token: '',
  likedGames: [],
  dislikedGames: [],
  recommendedGames: [],
};

function playerReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LIKED_GAMES:
      return { ...state, likedGames: [...state.likedGames, action.gameId] };
    case LOAD_RECOMMENDATIONS:
      return { ...state, recommendedGames: action.recommendations };
    case LOAD_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
}

export default playerReducer;
