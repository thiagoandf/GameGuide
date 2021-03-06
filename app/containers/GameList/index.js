import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import {
  selectGames,
  selectPlayer,
  selectPlayerLikedGames,
  selectReports,
} from '../../state/domain/selectors';
import GameList from '../../ui/pages/GameList';
import {
  selectPlayerAvatar,
  selectPlayerEmail,
} from '../../state/registration/selectors';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  playerAvatar: selectPlayerAvatar,
  playerEmail: selectPlayerEmail,
  gameList: selectGames,
  player: selectPlayer,
  playerLikedGames: selectPlayerLikedGames,
  reports: selectReports,
});

const mapDispatchToProps = dispatch => ({
  loadUserInfo: () => dispatch(domainActions.loadUserInfo()),
  requestPlayerInfo: () => dispatch(domainActions.requestPlayerInfo()),
  requestGameList: () => dispatch(domainActions.requestGameList()),
  likeGame: id => dispatch(domainActions.likeGame(id)),
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  goToReports: () => dispatch(push('/report')),
  goToGameDetail: gameId => dispatch(push(`/game/${gameId}`)),
  logout: () => dispatch(push('/')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameList);
