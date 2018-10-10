import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { compose } from 'redux';
import SignupExperience from '../../ui/pages/SignupExperience';
import { addHistoryAndPush } from '../../state/registration/actions';

const mapDispatchToProps = dispatch => ({
  addTheFuckingHistory: (weeklyPlaytime, collectionSize) =>
    dispatch(addHistoryAndPush(weeklyPlaytime, collectionSize)),
  goNext: () => dispatch(push('/playHistory')),
  goBack: () => dispatch(push('/avatar')),
});

const withConnect = connect(
  undefined,
  mapDispatchToProps,
);

export default compose(withConnect)(SignupExperience);
