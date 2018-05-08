import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, FlatButton } from 'material-ui';
import { List, ListItem } from 'material-ui/List';

const buttonStyle = {
  backgroundColor: 'transparent',
  color: 'white',
};

const Recommendations = (props) => (
  <div>
    <AppBar title="GameGuide" onLeftIconButtonClick={this.handleToggle} >
      <FlatButton label="Request recommendations" onClick={props.requestRecommendations} style={buttonStyle} />
      <FlatButton label="Request game list" onClick={props.requestGameList} style={buttonStyle} />
      <FlatButton label="Game List" onClick={props.goToGameList} style={buttonStyle} />
      <FlatButton label="Logout" onClick={props.logout} style={buttonStyle} />
    </AppBar>
    <List>
      {props.recommendedGames.map((game) =>
        (<ListItem
          key={game.id}
          primaryText={game.name}
          onClick={() => props.goToGameDetail(game.id)}
        />))}
    </List>
  </div>
);

Recommendations.propTypes = {
  recommendedGames: PropTypes.array,
  requestGameList: PropTypes.func.isRequired,
  requestRecommendations: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  goToGameDetail: PropTypes.func.isRequired, // eslint-disable-line
};

export default Recommendations;
