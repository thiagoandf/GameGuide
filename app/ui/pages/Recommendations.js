import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import MainAppBar from '../components/MainAppBar';
import GameGrid from '../components/GameGrid';

class Recommendations extends React.Component {
  componentDidMount() {
    this.props.requestGameList();
    this.props.requestRecommendations();
  }
  render() {
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
          <Typography />
          <GameGrid
            gameList={this.props.recommendedGames}
            width="90%"
            maxWidth="560px"
            height="150px"
            onClick={game => {
              console.log(game); /* eslint-disable-line no-console */
            }}
          />
        </div>
      </VerticalContainer>
    );
  }
}

Recommendations.propTypes = {
  recommendedGames: PropTypes.array,
  requestGameList: PropTypes.func.isRequired,
  requestRecommendations: PropTypes.func.isRequired,
  goToRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
  playerEmail: PropTypes.string,
  playerAvatar: PropTypes.string,
};

export default Recommendations;
