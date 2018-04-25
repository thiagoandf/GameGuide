import React from 'react';
import PropTypes from 'prop-types';
import { FlatButton } from 'material-ui';
import { List, ListItem } from 'material-ui/List';

const Recommendations = (props) => (
  <div>
    <FlatButton label="Request recommendations" onClick={props.requestRecommendations} />
    <FlatButton label="Request game list" onClick={props.requestGameList} />
    <List>
      {props.recommendedGames.map((game) =>
        <ListItem key={game.id} primaryText={game.name} />)}
    </List>
  </div>
);

Recommendations.propTypes = {
  recommendedGames: PropTypes.array,
  requestGameList: PropTypes.func.isRequired,
  requestRecommendations: PropTypes.func.isRequired,
};

export default Recommendations;
