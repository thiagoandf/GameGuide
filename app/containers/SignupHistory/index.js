import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import SignupHistory from '../../ui/pages/SignupHistory';
import makeDomainActions from '../../state/domain/actions';
import ackbar from '../../api/ackbar';
import {
  selectGames,
  selectPlayerLikedGames,
} from '../../state/domain/selectors';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  gameList: selectGames,
  playerLikedGames: selectPlayerLikedGames,
});

const mapDispatchToProps = dispatch => ({
  requestPlayerInfo: () => dispatch(domainActions.requestPlayerInfo()),
  requestGameList: () => dispatch(domainActions.requestGameList()),
  likeGame: id => dispatch(domainActions.likeGame(id)),
  goNext: () => dispatch(push('/games')),
  goBack: () => dispatch(push('/experience')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignupHistory);
