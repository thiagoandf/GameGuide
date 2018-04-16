import { combineReducers } from 'redux-immutable';
import player from './reducers/player';
import games from './reducers/games';

const domainReducer = combineReducers({
  player,
  games,
});

export default domainReducer;
