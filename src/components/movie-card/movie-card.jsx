//for Movies 
import React from 'react';
<<<<<<< Updated upstream

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;

        return <div className="movie-card" onClick={() => {
             onMovieClick(movie); }}> {movie.Title }</div>;
      }
    }
=======
import PropTypes from 'prop-types';
import { Button, Card, CardGroup, Container, Row, Col } from 'react-bootstrap';
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
            <Card.Img className="cardImage" variant="top" src={movie.ImagePath} />
            <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>{movie.Description}</Card.Text>
            <Button variant="secondary" onClick={() => onMovieClick(movie)} >More...</Button>
            </Card.Body>
            </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

>>>>>>> Stashed changes

 

