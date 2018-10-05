import makeDomainActions from '../../../state/domain/actions';
import configureStore from '../../../configureStore';
import {
  selectGames,
  selectPlayerLikedGames,
  selectRecommendationIds,
  selectPlayerToken,
} from '../../../state/domain/selectors';

let store;

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

      expect(selectGames(store.getState())).toEqual(mockGames);
    });
  });

  describe('Like game', () => {
    it('Should add liked game to local field if update is successful', async () => {
      const domainActions = makeDomainActions({
        postLikeGame: () => Promise.resolve(),
      });

      await store.dispatch(domainActions.likeGame(42));

      expect(selectPlayerLikedGames(store.getState())).toEqual({ 42: true });
    });

    it('Should not add liked game to local field if update is not successful', async () => {
      const domainActions = makeDomainActions({
        postLikeGame: () => Promise.reject(),
      });

      await store.dispatch(domainActions.likeGame(42));

      expect(selectPlayerLikedGames(store.getState())).toEqual({});
    });
  });

  describe('Request recommendations', () => {
    it('Should add recommended games to player', async () => {
      const mockRecommendations = [1, 2, 3];
      const domainActions = makeDomainActions({
        getRecommendations: () => Promise.resolve(mockRecommendations),
      });

      await store.dispatch(domainActions.requestRecommendations());

      expect(selectRecommendationIds(store.getState())).toEqual(
        mockRecommendations,
      );
    });
  });

  describe('Try login', () => {
    it('Should load token if successful', async () => {
      const mockToken = 'abc123';
      const domainActions = makeDomainActions({
        postLogin: () => Promise.resolve({ token: mockToken }),
      });

      await store.dispatch(domainActions.tryLogin());

      expect(selectPlayerToken(store.getState())).toEqual(mockToken);
    });

    it('Should not have token if unsuccessful', async () => {
      const domainActions = makeDomainActions({
        postLogin: () => Promise.reject(),
      });

      await store.dispatch(domainActions.tryLogin());

      expect(selectPlayerToken(store.getState())).toEqual('');
    });
  });

  describe('Try sign up', () => {
    it('Should load token if successful', async () => {
      const mockToken = 'abc123';
      const domainActions = makeDomainActions({
        postSignup: () => Promise.resolve({ token: mockToken }),
      });

      await store.dispatch(domainActions.trySignUp());

      expect(selectPlayerToken(store.getState())).toEqual(mockToken);
    });

    it('Should not have token if unsuccessful', async () => {
      const domainActions = makeDomainActions({
        postSignup: () => Promise.reject(),
      });

      await store.dispatch(domainActions.trySignUp());

      expect(selectPlayerToken(store.getState())).toEqual('');
    });
  });
});
