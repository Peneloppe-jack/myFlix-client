import React from "react";  
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardGroup } from "react-bootstrap";

import { Link } from 'react-router-dom';

import './movie-card.scss';


export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return ( 
      <CardGroup>
      <Card className="bg-light text-black" border='danger' style={{ width: '20rem', height: '20rem',margin: '.5rem' }}>
      <Card.Img  variant="top" src={movie.ImagePath} crossOrigin="true" style={{width: '8rem', height: '12rem'}}/>
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Link to={`/movies/${movie._id}`}>
          <Button variant="link">More details</Button>
          </Link>
        </Card.Body>
      </Card>
      </CardGroup>
    ); 
  }   
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    ImagePath: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Description: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
    }).isRequired,
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Bio: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
 
};
