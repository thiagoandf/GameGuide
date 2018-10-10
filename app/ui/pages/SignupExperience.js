import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography, AppBar, Button } from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import SliderSelector from '../components/SliderSelector';

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
  sliderTrackAfter: {
    backgroundColor: theme.palette.ggGrey.light,
  },
  sliderThumbSize: {
    width: theme.spacing.qi * 1.6,
    height: theme.spacing.qi * 1.6,
  },
  sliderLabelDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: theme.spacing.gg,
  },
  sliderPadding: {
    padding: '16px 0px 16px 0px',
  },
  inputLabel: {
    color: theme.palette.secondary.light,
  },
  valueLabel: {
    color: theme.palette.secondary.main,
  },
  slidersWrapper: {
    width: '75%',
  },
  sliderText: {
    textAlign: 'center',
    padding: theme.spacing.gg,
  },
  titleWrapper: {
    width: '65%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingBottom: theme.spacing.gg * 3.5,
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

// eslint-disable-next-line react/prefer-stateless-function
class SignupExperience extends React.Component {
  state = {
    hours: 0,
    owns: 0,
  };

  nextPage = () => {
    console.log('called', this.props);
    this.props.addTheFuckingHistory(this.state.hours, this.state.owns);
  };

  render() {
    const { classes } = this.props;
    return (
      <VerticalContainer>
        <AppBar position="absolute" className={classes.appBar}>
          <Typography variant="title" className={classes.title}>
            Game Guide
          </Typography>
        </AppBar>
        <div className={classes.titleWrapper}>
          <Typography
            variant="title"
            style={{ textAlign: 'center', paddingBottom: '30px' }}
          >
            Casual ou Hardcore?
          </Typography>
          <Typography variant="subheading" style={{ textAlign: 'center' }}>
            Agora arraste os seletores abaixo selecionando quanto você acha que
            mais se enquadra com seu perfil.
          </Typography>
        </div>
        <div className={classes.slidersWrapper}>
          <Typography variant="body1" className={classes.sliderText}>
            Quantos horas você passa jogando Board Games por semana?
          </Typography>
          <SliderSelector
            suffix={this.state.hours > 9 && '+'}
            max={10}
            min={0}
            margin="0px"
            steps={1}
            value={this.state.hours}
            onChange={sliderValue => {
              this.setState({
                hours: sliderValue,
              });
            }}
          />
          <Typography variant="body1" className={classes.sliderText}>
            Quantos Board Games você tem?
          </Typography>
          <SliderSelector
            suffix={this.state.owns > 9 && '+'}
            max={10}
            min={0}
            margin="0px"
            steps={1}
            value={this.state.owns}
            onChange={sliderValue => {
              this.setState({
                owns: sliderValue,
              });
            }}
          />
        </div>
        <Button className={classes.continueButton} onClick={this.nextPage}>
          <Typography variant="body1" className={classes.continueButtonText}>
            Continuar
          </Typography>
        </Button>
      </VerticalContainer>
    );
  }
}

SignupExperience.propTypes = {
  addTheFuckingHistory: PropTypes.func,
  classes: PropTypes.any,
};

export default withStyles(styles)(SignupExperience);
