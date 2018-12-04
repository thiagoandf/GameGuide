import { connect } from 'react-redux';
import { goBack, push } from 'react-router-redux';
import { compose } from 'redux';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import {
  makeSelectGame,
  selectPlayerLikedGames,
  selectReports,
} from '../../state/domain/selectors';
import GameDetail from '../../ui/pages/GameDetail';
import {
  selectPlayerAvatar,
  selectPlayerEmail,
} from '../../state/registration/selectors';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = (state, ownProps) => ({
  game: makeSelectGame(ownProps.match.params.id)(state),
  playerLikedGames: selectPlayerLikedGames,
  playerAvatar: selectPlayerAvatar,
  playerEmail: selectPlayerEmail,
  reports: selectReports,
});

const mapDispatchToProps = dispatch => ({
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  goToReports: () => dispatch(push('/report')),
  logout: () => dispatch(push('/')),
  loadUserInfo: () => dispatch(domainActions.loadUserInfo()),
  requestGameList: () => dispatch(domainActions.requestGameList()),
  requestPlayerInfo: () => dispatch(domainActions.requestPlayerInfo()),
  likeGame: id => dispatch(domainActions.likeGame(id)),
  goBack: () => dispatch(goBack()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(GameDetail);
