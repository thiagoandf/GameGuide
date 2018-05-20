import React from 'react';
import PropTypes from 'prop-types';
import { RaisedButton } from 'material-ui';
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
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  imageDiv: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 100,
  },
  gameImage: {
    maxWidth: 400,
    height: 'auto',
  },
};

class GameDetail extends React.Component {
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
          <VerticalContainer>
            <div style={styles.imageDiv}>
              <div>
                <img
                  src={this.props.game.coverImage}
                  alt="cool game"
                  style={styles.gameImage}
                />
              </div>
            </div>
            <div>
              <h1>{this.props.game.name}</h1>
              <p>{this.props.game.year}</p>
              <p>
                {this.props.game.numberOfPlayers} players -{' '}
                {this.props.game.duration}
              </p>
              <p>Recommended age: {this.props.game.age}</p>
              <p>{this.props.game.description}</p>
              <RaisedButton label="Go Back" onClick={this.props.goBack} />
            </div>
          </VerticalContainer>
        </div>
      </VerticalContainer>
    );
  }
}

GameDetail.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    year: PropTypes.string,
    age: PropTypes.string,
    numberOfPlayers: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    coverImage: PropTypes.string,
  }),
  requestGameList: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default GameDetail;
