import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Typography,
  AppBar,
  Button,
  Input,
} from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import GameGrid from '../components/GameGrid';

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
class SignupHistory extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
  }
  state = {
    gameList: this.props.gameList,
  };

  nextPage = () => {};

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
            Histórico
          </Typography>
          <Typography variant="subheading" style={{ textAlign: 'center' }}>
            Para conseguirmos te dar uma recomendação melhor, selecione 5 jogos
            que você já jogou.
          </Typography>
        </div>
        <Input
          onChange={e => {
            this.setState({
              gameList: this.props.gameList.filter(game =>
                game.name.toUpperCase().includes(e.target.value.toUpperCase()),
              ),
            });
            console.log(this.state.gameList);
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <GameGrid
            gameList={this.state.gameList}
            width="100%"
            height="250px"
            onClick={game => this.props.likeGame(game.id)}
          />
          {/* TODO: REPLACE WITH ACTION DISPATCH */}
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

SignupHistory.propTypes = {
  gameList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      year: PropTypes.string,
      age: PropTypes.string,
      numberOfPlayers: PropTypes.string,
      duration: PropTypes.string,
      description: PropTypes.string,
      coverImage: PropTypes.string,
    }),
  ),
  requestGameList: PropTypes.func.isRequired,
  likeGame: PropTypes.func.isRequired,
  classes: PropTypes.any,
};

export default withStyles(styles)(SignupHistory);
