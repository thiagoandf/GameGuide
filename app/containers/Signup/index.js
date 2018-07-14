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
  trySignUp,
} from '../../state/domain/actions';

import Signup from '../../ui/pages/Signup';

const mapStateToProps = createStructuredSelector({
  email: selectPlayerEmail,
  password: selectPlayerPassword,
});

const mapDispatchToProps = dispatch => ({
  onChangeEmail: email => dispatch(updateLoginEmail(email)),
  onChangePassword: password => dispatch(updateLoginPassword(password)),
  trySignUp: () => dispatch(trySignUp()),
  goBack: () => dispatch(push('/')),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Signup);
