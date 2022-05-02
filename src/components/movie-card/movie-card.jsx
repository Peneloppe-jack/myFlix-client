import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import {Card, CardImg, CardBody, CardTitle, CardText }from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

import './movie-card.scss'

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
    <Card>
      <CardImg variant="top" src={movie.ImagePath} />
      <CardBody>

        <CardTitle>{movie.Title}</CardTitle>
        <CardText>{movie.Description}</CardText>

        <Link to={`/movies/${movie._id}`}>
          <Button variant="link">Open</Button>
        </Link>

      </CardBody>
    </Card>
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
  
