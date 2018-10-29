import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  Typography,
  AppBar,
  Button,
  Input,
  InputAdornment,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
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
    this.props.requestPlayerInfo();
  }
  state = {
    gameList: this.props.gameList,
  };

  nextPage() {
    this.props.goNext();
  }

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
          placeholder="Pesquisa"
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
          onChange={e => {
            this.setState({
              gameList: this.props.gameList.filter(game =>
                game.name.toUpperCase().includes(e.target.value.toUpperCase()),
              ),
            });
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <GameGrid
            gameList={this.state.gameList}
            width="100%"
            height="40vh"
            maxWidth="720px"
            maxHeight="400px"
            onClick={game => this.props.likeGame(game.id)}
            onView={game => this.props.likeGame(game.id)}
            likes={this.props.playerLikedGames}
          />
        </div>
        <Button
          className={classes.continueButton}
          onClick={() => this.props.goNext()}
        >
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
  goNext: PropTypes.func,
  requestPlayerInfo: PropTypes.func.isRequired,
  playerLikedGames: PropTypes.object,
};

export default withStyles(styles)(SignupHistory);
