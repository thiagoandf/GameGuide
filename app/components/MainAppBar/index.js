/**
 *
 * MainAppBar
 *
 */

import React from 'react';
import {
  AppBar,
  Drawer,
  MenuItem,
  ListSubheader,
  Divider,
} from '@material-ui/core';
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
          onRequestChange={open => this.setState({ open })}
        >
          <ListSubheader>Ir para:</ListSubheader>
          <MenuItem onClick={this.handleGoToRecommendations}>
            Recomendações
          </MenuItem>
          <MenuItem onClick={this.handleGoToGameList}>Lista de jogos</MenuItem>
          <Divider />
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
