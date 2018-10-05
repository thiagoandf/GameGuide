import { combineReducers } from 'redux';
import player from './reducers/player';
import games from './reducers/games';
import customer from './reducers/customer';

const domainReducer = combineReducers({
  customer,
  player,
  games,
});

export default domainReducer;
