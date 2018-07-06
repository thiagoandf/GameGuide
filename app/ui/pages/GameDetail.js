import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  CardHeader,
  Button,
} from '@material-ui/core';
import VerticalContainer from '../components/VerticalContainer';
import MainAppBar from '../components/MainAppBar';

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
            <Card>
              <CardHeader
                title={this.props.game.name}
                subtitle={this.props.game.year}
              />
              <CardMedia src={this.props.game.coverImage} title="cool game" />
              <CardContent>
                Para {this.props.game.numberOfPlayers} jogadores
              </CardContent>
              <CardContent>
                Duração: {this.props.game.duration} minutos
              </CardContent>
              <CardContent>
                Idade recomendada: {this.props.game.age}
              </CardContent>
              <CardContent>{this.props.game.description}</CardContent>
              <CardActions>
                <Button variant="flat" onClick={this.props.goBack}>
                  Voltar
                </Button>
              </CardActions>
            </Card>
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

GameDetail.defaultProps = {
  game: {
    coverImage: '',
  },
};

export default GameDetail;
