/* eslint-disable no-unused-vars */
import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  ListSubheader,
  MenuItem,
  Divider,
  IconButton,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

const styles = theme => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
  },
});

class MainAppBar extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.state = { open: false };
  }
  handleToggle = () => this.setState({ open: !this.state.open });

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
    // eslint-disable-next-line react/prop-types
    const { classes } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              GameGuide
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleToggle}>
          <ListSubheader>Ir para:</ListSubheader>
          <MenuItem onClick={this.handleGoToRecommendations}>
            Recomendações
          </MenuItem>
          <MenuItem onClick={this.handleGoToGameList}>Lista de jogos</MenuItem>
          <Divider />
          <MenuItem onClick={this.handleLogout}>Sair</MenuItem>
        </Drawer>
      </React.Fragment>
    );
  }
}

MainAppBar.propTypes = {
  goToRecommendations: PropTypes.func.isRequired,
  goToGameList: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
};

export default MainAppBar;
