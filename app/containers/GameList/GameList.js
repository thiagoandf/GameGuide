import React from 'react';
import PropTypes from 'prop-types';
import {
  GridList,
  GridTile,
  IconButton,
  ListSubheader,
} from '@material-ui/core';
import { ThumbUp } from '@material-ui/icons';
import VerticalContainer from '../../components/VerticalContainer';
import MainAppBar from '../../components/MainAppBar';

const styles = {
  buttonStyle: {
    backgroundColor: 'transparent',
    color: 'white',
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
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
};

class GameList extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
  }

  render() {
    return (
      <VerticalContainer>
        <div style={{ maxWidth: '100%', minWidth: '100%' }}>
          <MainAppBar
            goToRecommendations={this.props.goToRecommendations}
            goToGameList={this.props.goToGameList}
            logout={this.props.logout}
          />
          <div style={styles.root}>
            <GridList cellHeight={200} style={styles.gridList}>
              <ListSubheader>Mostre-nos quais jogos você curte!</ListSubheader>
              {this.props.gameList.map(game => (
                <GridTile
                  key={game.id}
                  title={
                    <span
                      role="button"
                      style={styles.title}
                      tabIndex="0"
                      onClick={() => this.props.goToGameDetail(game.id)}
                    >
                      <strong>{game.name}</strong>{' '}
                    </span>
                  }
                  actionIcon={
                    <IconButton>
                      <ThumbUp
                        color="white"
                        onClick={() => this.props.likeGame(game.id)}
                      />
                    </IconButton>
                  }
                  style={styles.gameStyle}
                >
                  <span
                    role="button"
                    style={styles.title}
                    tabIndex="0"
                    onClick={() => this.props.goToGameDetail(game.id)}
                  >
                    <img
                      src={game.coverImage}
                      alt="cool game"
                      style={styles.image}
                    />
                  </span>
                </GridTile>
              ))}
            </GridList>
          </div>
        </div>
      </VerticalContainer>
    );
  }
}

GameList.propTypes = {
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
  goToRecommendations: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  likeGame: PropTypes.func.isRequired, // eslint-disable-line
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
};

export default GameList;
