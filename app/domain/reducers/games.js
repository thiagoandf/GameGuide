import { fromJS } from 'immutable';
import gameReducer from './game';

const initialState = fromJS([]);

function gamesReducer(state = initialState, action) {
  switch (action) {
    default:
      return state.map((game) => gameReducer(game, action));
  }
}

export default gamesReducer;
