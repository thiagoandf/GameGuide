import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import {
  selectPlayerLikedGames,
  selectRecommendations,
  selectReports,
} from '../../state/domain/selectors';
import Recommendations from '../../ui/pages/Recommendations';
import {
  selectPlayerAvatar,
  selectPlayerEmail,
} from '../../state/registration/selectors';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  recommendedGames: selectRecommendations,
  playerAvatar: selectPlayerAvatar,
  playerEmail: selectPlayerEmail,
  reports: selectReports,
  playerLikedGames: selectPlayerLikedGames,
});

const mapDispatchToProps = dispatch => ({
  requestGameList: () => dispatch(domainActions.requestGameList()),
  requestRecommendations: () =>
    dispatch(domainActions.requestRecommendations()),
  loadUserInfo: () => dispatch(domainActions.loadUserInfo()),
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToReports: () => dispatch(push('/report')),
  goToGameList: () => dispatch(push('/games')),
  goToGameDetail: gameId => dispatch(push(`/game/${gameId}`)),
  logout: () => dispatch(push('/')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Recommendations);
