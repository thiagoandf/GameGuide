/* eslint-disable react/prefer-stateless-function */

import { withStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../images/logo.svg';

const styles = theme => ({
  styledLogoHeader: {
    paddinTop: theme.spacing.gg * 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

class LogoHeader extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.styledLogoHeader}>
        <img src={Logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        <h1>GameGuide</h1>
      </div>
    );
  }
}

LogoHeader.propTypes = {
  classes: PropTypes.any,
};

export default withStyles(styles)(LogoHeader);
