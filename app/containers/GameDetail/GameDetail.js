import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
} from 'material-ui';
import VerticalContainer from '../../components/VerticalContainer';
import MainAppBar from '../../components/MainAppBar';

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
              <CardMedia>
                <img src={this.props.game.coverImage} alt="cool game" />
              </CardMedia>
              <CardTitle
                title={this.props.game.name}
                subtitle={this.props.game.year}
              />
              <CardText>
                Para {this.props.game.numberOfPlayers} jogadores
              </CardText>
              <CardText>Duração: {this.props.game.duration} minutos</CardText>
              <CardText>Idade recomendada: {this.props.game.age}</CardText>
              <CardText>{this.props.game.description}</CardText>
              <CardActions>
                <FlatButton label="Voltar" onClick={this.props.goBack} />
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
