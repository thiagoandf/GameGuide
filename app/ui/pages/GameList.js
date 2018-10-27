import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import MainAppBar from '../components/MainAppBar';
import GameGrid from '../components/GameGrid';

const styles = theme => ({
  buttonStyle: {
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    fontWeight: 50,
    paddingTop: 12,
    height: 40,
  },
  notShownButton: {
    display: 'none',
  },
  gameStyle: {
    padding: '5%',
    marginTop: '20px',
    minWidth: '100%',
    textAlign: 'center',
    align: 'center',
  },
  gridList: {
    fullWidth: true,
    height: 'auto',
  },
  image: {
    minWidth: '100%',
    maxWidth: '100%',
    height: 'auto',
    marginTop: '-30%',
  },
  root: {
    paddingTop: '60px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
  },
});

class GameList extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
    this.props.requestPlayerInfo();
  }

  render() {
    const { classes } = this.props;
    return (
      <VerticalContainer>
        <div style={{ maxWidth: '100%', minWidth: '100%' }}>
          <MainAppBar
            goToRecommendations={this.props.goToRecommendations}
            goToGameList={this.props.goToGameList}
            logout={this.props.logout}
            email={this.props.playerEmail}
            avatar={this.props.playerAvatar}
          />
          <div className={classes.root}>
            <Typography variant="title">Todos os jogos</Typography>
            <GameGrid
              gameList={this.props.gameList}
              width="100%"
              height="100%"
              maxWidth="720px"
              maxHeight="100%"
              onClick={game => this.props.likeGame(game.id)}
              onView={game => this.props.goToGameDetail(game.id)}
              likes={this.props.playerLikedGames}
            />
          </div>
        </div>
      </VerticalContainer>
    );
  }
}

GameList.propTypes = {
  classes: PropTypes.object,
  playerEmail: PropTypes.any,
  playerAvatar: PropTypes.any,
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
  playerLikedGames: PropTypes.array.isRequired,
  requestPlayerInfo: PropTypes.func.isRequired,
  requestGameList: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  likeGame: PropTypes.func.isRequired, // eslint-disable-line
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
};

export default withStyles(styles)(GameList);
