import makeDomainActions from '../../../state/domain/actions';
import configureStore from '../../../configureStore';

let store = configureStore();

describe('Domain actions', () => {
  beforeEach(() => {
    store = configureStore();
  });

  describe('Request game list', () => {
    it('Should fill game list with API result', async () => {
      const mockGames = [{ id: 1 }, { id: 2 }];
      const domainActions = makeDomainActions({
        getGameList: () => Promise.resolve(mockGames),
      });

      await store.dispatch(domainActions.requestGameList());

      expect(store.getState().domain.games).toEqual(mockGames);
    });
  });

  describe('Like game', () => {
    it('Should add liked game to local field if update is successful', async () => {
      const domainActions = makeDomainActions({
        postLikeGame: () => Promise.resolve(),
      });

      await store.dispatch(domainActions.likeGame(42));

      expect(store.getState().domain.player.likedGames).toEqual([42]);
    });

    it('Should not add liked game to local field if update is not successful', async () => {
      const domainActions = makeDomainActions({
        postLikeGame: () => Promise.reject(),
      });

      await store.dispatch(domainActions.likeGame(42));

      expect(store.getState().domain.player.likedGames).toEqual([]);
    });
  });
});
