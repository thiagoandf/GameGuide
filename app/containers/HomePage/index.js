import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import HomePage from '../../ui/pages/HomePage';

const domainActions = makeDomainActions(ackbar);

const mapDispatchToProps = dispatch => ({
  tryLogin: (email, password) =>
    dispatch(domainActions.tryLogin(email, password)),
  goToSignup: () => dispatch(push('/signup')),
});

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
