import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import './movie-card.scss';

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  constructor() {
    super();

    this.state = {
      FavoriteMovies: []
    };
  }

  onAddFavorite = (movie) => {
    const Username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios.post
      (`https://mysterious-wildwood-desperado.herokuapp.com/users/${Username}/movies/${movie._id}`,
   {
      FavoriteMovies: this.state.FavoriteMovies
    },
    {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      this.setState({
        FavoriteMovies: response.data.FavoriteMovies
      });
      console.log(response);
      alert("Movie Added");
    })
    .catch(function (error) {
      console.log(error);
    });
};

render() {
  const { movie, onAddFavorite } = this.props;
    return (

    <Card className="bg-light text-black" border='danger' style={{ width: '20rem', height: '20rem',margin: '.5rem' }}>
    <Card.Img  variant="top" src={movie.ImageURL} style={{width: '8rem', height: '12rem'}}/>
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Link to={`/movies/${movie._id}`}>
        <Button variant="link">More details</Button>
        </Link>
        <Button className="add fav" variant="primary" value={movie._id} onClick={() => this.onAddFavorite(movie)}>Add to list</Button>
        </Card.Body>
      </Card>

    );
  }
}


MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    ImageURL: PropTypes.string.isRequired,
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired
    }),
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired
    })
  }).isRequired
};

export default MovieCard;