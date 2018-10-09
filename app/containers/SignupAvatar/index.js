import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import SignupAvatar from '../../ui/pages/SignupAvatar';

const mapDispatchToProps = dispatch => ({
  goNext: () => dispatch(push('/signup/3')),
  goBack: () => dispatch(push('/')),
});

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(withConnect)(SignupAvatar);
