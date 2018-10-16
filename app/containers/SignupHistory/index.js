import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import SignupHistory from '../../ui/pages/SignupHistory';
import makeDomainActions from '../../state/domain/actions';
import ackbar from '../../api/ackbar';
import { selectGames } from '../../state/domain/selectors';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  gameList: selectGames,
});

const mapDispatchToProps = dispatch => ({
  requestGameList: () => dispatch(domainActions.requestGameList()),
  likeGame: id => dispatch(domainActions.likeGame(id)),
  goNext: () => dispatch(push('/playHistory')),
  goBack: () => dispatch(push('/avatar')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SignupHistory);
