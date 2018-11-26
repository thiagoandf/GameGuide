import React from 'react';
import PropTypes from 'prop-types';
import { Typography, IconButton, withStyles } from '@material-ui/core';
import {
  Favorite,
  FavoriteBorder,
  PlaylistAdd,
  PlaylistAddCheck,
} from '@material-ui/icons';
import VerticalContainer from '../components/VerticalContainer';
import MainAppBar from '../components/MainAppBar';

const styles = theme => ({
  titleWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing.gg * 2,
    flexDirection: 'row',
  },
  contentWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: theme.spacing.gg * 2.5,
  },
  titleTextWrapper: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  titleButtonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  infoWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing.gg * 2,
  },
  iconButton: {},
});
class GameDetail extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
    this.props.loadUserInfo();
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
          />
          <VerticalContainer>
            <img
              style={{ paddingTop: '70px' }}
              alt="GameImage"
              src={this.props.game.coverImage}
              width="240px"
            />
            <div className={classes.titleWrapper}>
              <div className={classes.titleTextWrapper}>
                <Typography variant="headline">
                  {this.props.game.name}
                </Typography>
                <Typography variant="caption">
                  {`${this.props.game.publisher} - ${this.props.game.year}`}
                </Typography>
              </div>
              <div className={classes.titleButtonsWrapper}>
                <IconButton
                  className={classes.iconButton}
                  onClick={() => {
                    this.props.likeGame(this.props.game.id);
                  }}
                >
                  {this.props.playerLikedGames[this.props.game.id] ? (
                    <Favorite style={{ fill: '#F16567' }} />
                  ) : (
                    <FavoriteBorder />
                  )}
                </IconButton>
                <IconButton
                  className={classes.iconButton}
                  onClick={() => {
                    this.props.likeGame(this.props.game.id);
                  }}
                >
                  {this.props.playerLikedGames[this.props.game.id] ? (
                    <PlaylistAddCheck />
                  ) : (
                    <PlaylistAdd />
                  )}
                </IconButton>
              </div>
            </div>
            <div className={classes.contentWrapper}>
              <div className={classes.infoWrapper}>
                <Typography variant="body1">
                  {`${this.props.game.numberOfPlayers} jogadores`}
                </Typography>
                <Typography variant="body1">
                  {`Idade: ${this.props.game.age}`}
                </Typography>
                <Typography variant="body1">
                  {`${this.props.game.duration} minutos`}
                </Typography>
              </div>
              <Typography variant="body1" align="justify">
                &nbsp; {this.props.game.description}
              </Typography>
            </div>
          </VerticalContainer>
        </div>
      </VerticalContainer>
    );
  }
}

GameDetail.propTypes = {
  classes: PropTypes.object,
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.string,
    age: PropTypes.string,
    numberOfPlayers: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
    publisher: PropTypes.string,
  }),
  requestGameList: PropTypes.func.isRequired,
  loadUserInfo: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  playerLikedGames: PropTypes.array,
  likeGame: PropTypes.func,
};

GameDetail.defaultProps = {
  game: {
    coverImage: '',
  },
};

export default withStyles(styles)(GameDetail);
