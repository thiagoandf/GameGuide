import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { createStructuredSelector } from 'reselect';
import Reports from '../../ui/pages/Reports';
import {
  selectPlayerAvatar,
  selectPlayerEmail,
} from '../../state/registration/selectors';
import makeDomainActions from '../../state/domain/actions';
import ackbar from '../../api/ackbar';
import { selectReports } from '../../state/domain/selectors';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  reports: selectReports,
  playerAvatar: selectPlayerAvatar,
  playerEmail: selectPlayerEmail,
});

const mapDispatchToProps = dispatch => ({
  requestCustomerInfo: () => dispatch(domainActions.requestCustomerInfo()),
  loadUserInfo: () => dispatch(domainActions.loadUserInfo()),
  goToRecommendations: () => dispatch(push('/recommendations')),
  goToGameList: () => dispatch(push('/games')),
  goToGameDetail: gameId => dispatch(push(`/game/${gameId}`)),
  goToReports: () => dispatch(push('/report')),
  logout: () => dispatch(push('/')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Reports);
