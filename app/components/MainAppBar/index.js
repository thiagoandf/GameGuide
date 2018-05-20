/**
 *
 * MainAppBar
 *
 */

import React from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';
import PropTypes from 'prop-types';

class MainAppBar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handleGoToRecommendations = () => {
    this.setState({ open: false });
    this.props.goToRecommendations();
  };

  handleGoToGameList = () => {
    this.setState({ open: false });
    this.props.goToGameList();
  };

  handleLogout = () => {
    this.setState({ open: false });
    this.props.logout();
  };

  render() {
    return (
      <div>
        <AppBar title="GameGuide" onLeftIconButtonClick={this.handleToggle} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onClick={this.handleGoToRecommendations}>
            Ver recomendações
          </MenuItem>
          <MenuItem onClick={this.handleGoToGameList}>
            Ir para lista de jogos
          </MenuItem>
          <MenuItem onClick={this.handleLogout}>Sair</MenuItem>
        </Drawer>
      </div>
    );
  }
}

MainAppBar.propTypes = {
  goToRecommendations: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default MainAppBar;
