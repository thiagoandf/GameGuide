import React from 'react';
import PropTypes from 'prop-types';
import { FlatButton } from 'material-ui';
import { List, ListItem } from 'material-ui/List';

const Recommendations = (props) => (
  <div>
    <FlatButton label="Request recommendations" onClick={props.requestRecommendations} />
    <FlatButton label="Request game list" onClick={props.requestGameList} />
    <FlatButton label="Go to game list" onClick={props.goToGameList} />
    <FlatButton label="Logout" onClick={props.logout} />
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
