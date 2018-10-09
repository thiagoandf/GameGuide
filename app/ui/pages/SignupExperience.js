import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, AppBar } from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.secondary.dark,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '48px',
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: '300',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class SignupExperience extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <VerticalContainer>
        <AppBar position="absolute" className={classes.appBar}>
          <Typography variant="title" className={classes.title}>
            Game Guide
          </Typography>
        </AppBar>
      </VerticalContainer>
    );
  }
}

SignupExperience.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(SignupExperience);
