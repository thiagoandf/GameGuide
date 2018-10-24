import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Button,
  Typography,
  AppBar,
  ButtonBase,
} from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';

import User from '../images/user.svg';
import Checkmark from '../images/checkmark.svg';

const styles = theme => ({
  paper: {
    [theme.breakpoints.down('md')]: {
      height: '300px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '420px',
    },
    width: '75%',
    maxWidth: '450px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.spacing.gg / 5,
    padding: theme.spacing.gg,
    borderRadius: theme.spacing.gg,
  },
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
  avatarWrapper: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '210px',
  },
  avatars: {
    padding: theme.spacing.gg / 2,
    borderRadius: '35px',
  },
  selectedAvatar: {
    padding: theme.spacing.gg / 2,
    backgroundColor: 'rgba(220,220,220,1)',
    borderRadius: '35px',
  },
  checkmark: {
    position: 'absolute',
    left: '50%',
    top: '-15%',
  },
  greeting: {
    color: theme.palette.common.black,
    fontWeight: '300',
  },
  greetingWrapper: {
    paddingBottom: theme.spacing.gg * 2,
  },
  textWrapper: {
    paddingBottom: theme.spacing.gg * 5,
    width: '75%',
  },
  text: {
    color: theme.palette.common.black,
    fontWeight: '300',
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: theme.palette.secondary.light,
    marginTop: theme.spacing.gg * 3,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  continueButtonText: {
    color: theme.palette.common.white,
  },
});

class SignupAvatar extends React.Component {
  state = {
    selectedAvatar: null,
  };
  onAvatarSelect = i => {
    this.setState({ selectedAvatar: i });
  };

  continue = () => {
    this.props.addAvatar(this.state.selectedAvatar);
  };

  render() {
    const { classes } = this.props;
    const avatars = [
      User,
      User,
      User,
      User,
      User,
      User,
      User,
      User,
      User,
      User,
      User,
      User,
    ];
    return (
      <VerticalContainer>
        <AppBar position="absolute" className={classes.appBar}>
          <Typography variant="title" className={classes.title}>
            Game Guide
          </Typography>
        </AppBar>
        <div className={classes.greetingWrapper}>
          <Typography className={classes.greeting} variant="title">
            Olá
          </Typography>
        </div>
        <div className={classes.textWrapper}>
          <Typography variant="body1" className={classes.text}>
            Vimos que é sua primeira vez por aqui. Comece seu cadastro
            selecionando um avatar.
          </Typography>
        </div>
        <div className={classes.avatarWrapper}>
          {avatars.map((a, i) => (
            <ButtonBase
              key={Math.random()}
              style={{ borderRadius: '35px' }}
              onClick={() => this.onAvatarSelect(i)}
            >
              {this.state.selectedAvatar === i && (
                <img
                  className={classes.checkmark}
                  src={Checkmark}
                  width="40px"
                  height="40px"
                  alt="checkmark"
                />
              )}
              <div
                className={
                  this.state.selectedAvatar === i
                    ? classes.selectedAvatar
                    : classes.avatars
                }
              >
                <img src={a} alt="Avatar" width="60px" height="60px" />
              </div>
            </ButtonBase>
          ))}
        </div>
        <Button className={classes.continueButton} onClick={this.continue}>
          <Typography variant="body1" className={classes.continueButtonText}>
            Continuar
          </Typography>
        </Button>
      </VerticalContainer>
    );
  }
}

SignupAvatar.propTypes = {
  classes: PropTypes.any,
  addAvatar: PropTypes.func.isRequired,
};

export default withStyles(styles)(SignupAvatar);
