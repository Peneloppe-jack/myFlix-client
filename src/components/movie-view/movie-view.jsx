import React from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import { Container, Row, Col, Button } from 'react-bootstrap';
//import { Button } from '../button-view/button-view';
import { Link } from "react-router-dom";

import './movie-view.scss';

export class MovieView extends React.Component {
    render()  {
      const { movie, onBackClick } = this.props;
  
      return (
        <Container fluid className="moviesContainer">
   <Card className = "movie-view"> 
  
      <CardBody className="movie">
      <CardImg className="movie-poster" variant="top" src={movie.ImagePath} />

        <CardTitle>{movie.Title}</CardTitle>
        <CardText>{movie.Description}</CardText>

        <Link to={`/movies/${movie._id}`}>
          <Button variant="link">Open</Button>
        </Link>
      </CardBody>
      
      <CardBody className="director">

        <CardTitle>{director.Name}</CardTitle>
        <CardText>{director.Bio}</CardText>

        <Link to={`/directors/${movie.Director.Name}`}>
        <Button variant="link">Director</Button>
        </Link>

      </CardBody>
  

        <CardBody className="genre">

      <CardTitle>{genre.Name}</CardTitle>
      <CardText>{genre.Description}</CardText>

      <Link to={`/genre/${movie.Genre.Name}`}>
      <Button variant="link">Genre</Button>
      </Link>

      </CardBody>
      </Card>  
      </Container>
  );
  }
}

MovieView.propTypes = {
  movies: PropTypes.shape({
      ImagePath: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
          Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired
        }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};

export default MovieView;