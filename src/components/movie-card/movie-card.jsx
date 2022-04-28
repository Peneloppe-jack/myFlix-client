
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, CardTitle, CardImg, CardText, Container, Row, Col } from 'react-bootstrap';
//import { Button } from '../button-view/button-view';

import './movie-card.scss';

    export class MovieCard extends React.Component {
      render() {
        const { movie, onMovieClick } = this.props;

    return (
      <Container className="movieContainer">
        <Row>
        <Col>
          <CardGroup>
            <Card className="movieCard text-center" >
            <CardImg className="cardImage" variant="top" src={movie.ImagePath} />
            <CardBody>
            <CardTitle>{movie.Title}</CardTitle>
            <CardText>{movie.Description}</CardText>
            <Button variant="secondary" onClick={() => onMovieClick(movie)} >More...</Button>
            </CardBody>
            </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}
    MovieCard.propTypes = {
      movie: PropTypes.shape({
          ImagePath: PropTypes.string.isRequired,
          Title: PropTypes.string.isRequired,
          Description: PropTypes.string.isRequired,
          }).isRequired,
          onMovieClick: PropTypes.func.isRequired
      };
     
