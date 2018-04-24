import { LOAD_GAME_LIST } from './constants';

export const requestGameList = () => ({
  type: LOAD_GAME_LIST,
});

export const loadGameList = (gameList) => ({
  type: LOAD_GAME_LIST,
  gameList,
});
