import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { FlatButton } from 'material-ui';

import messages from './messages';

const GameDetail = (props) => (
  <div>
    <FlatButton label="Request game list" onClick={props.requestGameList} />
    <FlatButton label="Go Back" onClick={props.goBack} />
    <FormattedMessage {...messages.header} />
    {props.game && <p>Game: {props.game.name} - id: {props.game.id}</p>}
  </div>
);

GameDetail.propTypes = {
  game: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  requestGameList: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
};

export default GameDetail;
