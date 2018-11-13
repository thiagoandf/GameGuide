import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Paper,
  Button,
  Typography,
  Input,
} from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import LogoHeader from '../components/LogoHeader';

const styles = theme => ({
  elementStyle: {
    margin: theme.spacing.gg,
    width: '75%',
    maxWidth: '320px',
  },
  confirmPassword: {
    borderBottomColor: 'rgba(255,61,53,0.8)',
    borderBottomStyle: 'solid',
    borderBottomWidth: '1px',
    margin: theme.spacing.gg,
    width: '75%',
    maxWidth: '320px',
  },
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
  loginButton: {
    backgroundColor: theme.palette.secondary.light,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing.gg,
      width: '120px',
      height: '30px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '180px',
      height: '45px',
      marginTop: theme.spacing.gg * 2,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  signUpButtonText: {
    color: theme.palette.common.white,
    fontSize: theme.typography.gg.fontSize,
  },
  signUpButton: {
    backgroundColor: theme.palette.ggGrey.light,
    padding: theme.spacing.gg / 2,
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing.gg,
      width: '85px',
      height: '25px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '120px',
      height: '30px',
      marginTop: theme.spacing.gg * 2,
    },
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  backButtonText: {
    color: theme.palette.common.white,
    fontSize: theme.typography.gg.fontSize,
  },
  loginTitle: {
    paddingBottom: theme.spacing.gg,
    paddingTop: theme.spacing.gg,
    textTransform: 'uppercase',
  },
  placeholderClass: {
    '&::placeholder': {
      color: theme.palette.secondary.light,
      fontSize: theme.typography.body1.fontSize,
    },
  },
  errorMessage: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    height: 'auto',
  },
  errorMessageText: {
    color: '#ff3d35',
  },
});

class Signup extends React.Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    errorMessage: 'As senhas não são iguais',
  };

  handleOnChangeEmail = event => {
    this.setState({ email: event.target.value });
  };

  handleOnChangePassword = event => {
    this.setState({ password: event.target.value });
  };
  handleOnChangeConfirmPassword = event => {
    this.setState({ confirmPassword: event.target.value });
  };

  onSubmit = () => {
    if (
      this.state.password === this.state.confirmPassword &&
      this.state.password
    ) {
      this.props.addBasicInformation(this.state.email, this.state.password);
    }
  };

  render() {
    const { classes } = this.props;

    return (
      <VerticalContainer>
        <LogoHeader />
        <Paper className={classes.paper}>
          <Typography variant="title" className={classes.loginTitle}>
            Cadastro
          </Typography>
          <Input
            classes={{
              root: classes.elementStyle,
              input: classes.placeholderClass,
            }}
            placeholder="E-mail"
            value={this.state.email}
            onChange={this.handleOnChangeEmail}
          />
          <Input
            classes={{
              root: classes.elementStyle,
              input: classes.placeholderClass,
            }}
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleOnChangePassword}
            type="password"
          />
          <Input
            classes={{
              root:
                this.state.password !== this.state.confirmPassword
                  ? classes.confirmPassword
                  : classes.elementStyle,
              input: classes.placeholderClass,
            }}
            placeholder="Confirmar Senha"
            value={this.state.confirmPassword}
            onChange={this.handleOnChangeConfirmPassword}
            type="password"
          />
          {this.state.password !== this.state.confirmPassword && (
            <div className={classes.errorMessage}>
              <Typography variant="body1" className={classes.errorMessageText}>
                {this.state.errorMessage}
              </Typography>
            </div>
          )}
          <Button className={classes.loginButton} onClick={this.onSubmit}>
            <Typography variant="body1" className={classes.signUpButtonText}>
              Cadastrar
            </Typography>
          </Button>
          <Button className={classes.signUpButton} onClick={this.props.goBack}>
            <Typography variant="caption" className={classes.backButtonText}>
              Voltar
            </Typography>
          </Button>
        </Paper>
      </VerticalContainer>
    );
  }
}

Signup.propTypes = {
  addBasicInformation: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(styles)(Signup);
