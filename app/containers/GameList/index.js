import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import { selectGames, selectPlayer } from '../../state/domain/selectors';
import GameList from '../../ui/pages/GameList';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  gameList: selectGames,
  player: selectPlayer,
});

const mapDispatchToProps = dispatch => ({
  requestPlayerInfo: () => dispatch(domainActions.requestPlayerInfo()),
  requestGameList: () => dispatch(domainActions.requestGameList()),
  likeGame: id => dispatch(domainActions.likeGame(id)),
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  goToGameDetail: gameId => dispatch(push(`/game/${gameId}`)),
  logout: () => dispatch(push('/')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameList);
