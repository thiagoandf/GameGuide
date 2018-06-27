import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  Paper,
  ListSubheader,
  Avatar,
} from '@material-ui/core';
import VerticalContainer from '../../components/VerticalContainer';
import MainAppBar from '../../components/MainAppBar';

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
          />
          <Paper>
            <List>
              <ListSubheader>
                Nosso sistema recomenda para você estes jogos:
              </ListSubheader>
              {this.props.recommendedGames.map(game => (
                <ListItem
                  key={game.id}
                  primaryText={game.name}
                  secondaryText={game.year}
                  leftAvatar={<Avatar src={game.coverImage} />}
                  onClick={() => this.props.goToGameDetail(game.id)}
                />
              ))}
            </List>
          </Paper>
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
};

export default Recommendations;
