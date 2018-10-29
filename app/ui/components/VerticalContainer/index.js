import React from 'react';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
  styledVerticalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    marginBottom: theme.spacing.gg / 2,
    maxWidth: '100%',
    minWidth: '100%',
    minHeight: '100vh',
    overflowY: 'hidden',
  },
});

// eslint-disable-next-line react/prefer-stateless-function
class VerticalContainer extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.styledVerticalContainer}>
        {this.props.children}
      </div>
    );
  }
}

VerticalContainer.propTypes = {
  children: PropTypes.any,
  classes: PropTypes.any,
};

export default withStyles(styles)(VerticalContainer);
