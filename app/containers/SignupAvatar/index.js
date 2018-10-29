import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import SignupAvatar from '../../ui/pages/SignupAvatar';
import { addAvatarAndPush } from '../../state/registration/actions';

const mapDispatchToProps = dispatch => ({
  addAvatar: avatarUrl => dispatch(addAvatarAndPush(avatarUrl)),
  goNext: () => dispatch(push('/experience')),
  goBack: () => dispatch(push('/')),
});

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(withConnect)(SignupAvatar);
