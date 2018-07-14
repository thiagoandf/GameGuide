import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import ackbar from '../../api/ackbar';
import makeDomainActions from '../../state/domain/actions';
import {
  selectPlayerEmail,
  selectPlayerPassword,
} from '../../state/domain/selectors';
import HomePage from '../../ui/pages/HomePage';

const domainActions = makeDomainActions(ackbar);

const mapStateToProps = createStructuredSelector({
  email: selectPlayerEmail,
  password: selectPlayerPassword,
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: email => dispatch(domainActions.updateLoginEmail(email)),
  onChangePassword: password =>
    dispatch(domainActions.updateLoginPassword(password)),
  tryLogin: (email, password) =>
    dispatch(domainActions.tryLogin(email, password)),
  goToSignup: () => dispatch(push('/signup')),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
  tryLogin: () => dispatchProps.tryLogin(stateProps.email, stateProps.password),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
);

export default compose(withConnect)(HomePage);
