import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { push } from 'react-router-redux';

import {
  selectPlayerEmail,
  selectPlayerPassword,
} from '../../state/domain/selectors';
import {
  updateLoginEmail,
  updateLoginPassword,
  tryLogin,
} from '../../state/domain/actions';

import HomePage from '../../ui/pages/HomePage';

const mapStateToProps = createStructuredSelector({
  email: selectPlayerEmail,
  password: selectPlayerPassword,
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: email => dispatch(updateLoginEmail(email)),
  onChangePassword: password => dispatch(updateLoginPassword(password)),
  tryLogin: (email, password) => dispatch(tryLogin(email, password)),
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
