import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import {  Button, Col, Row, Card, Container,NavLink } from "react-bootstrap";

//import { UserData } from "../user-data/user-data;
//import { UpdateUser } from "../updated-user/updated-user;
//import { FavoriteMovies } from "../favorite-movies/favorites-movies;

//import './profile-view.scss';

import {UserData} from './user-data';
import {UpdatedUser} from './updated-user';
import {FavoriteMovies} from './favorite-movies';


export function ProfileView(props) {

  const [userdata, setUserdata] = useState({});
  const [updatedUser, setUpdatedUser] = useState({});
  const [favoriteMoviesList, setFavoriteMoviesList] = useState([]);
 

  let token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  const getUserData = (cancelToken, Username) => {
    axios.get(`https://mysterious-wildwood-desperado.herokuapp.com/users/${Username}`, {
      cancelToken: cancelToken
    })
      .then(response => {
        setUserdata(response.data);
        setUpdatedUser(response.data)
        setFavoriteMoviesList(props.movies.filter(m => response.data.FavoriteMovies.includes(m._id)));
      })
      .catch(err => {
          console.log(err);
      })
  }

  useEffect(() => {
    let source = axios.CancelToken.source();

    if (token !== null) {
      getUserData(source.token, props.user);
    } else {
      console.log('Not Authorized');
    }

    return() => {
      source.cancel();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`https://mysterious-wildwood-desperado.herokuapp.com/users/${userdata.Username}`, updatedUser)
    .then(response => {
      setUserdata(response.data);
      alert('Profile has been updated');
    })
    .catch(e => {
      console.log(e);
    });
  }


  const handleUpdate = (e) => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value
    });
  }

  const deleteProfile = (e) => {
    axios.delete(`https://mysterious-wildwood-desperado.herokuapp.com/users/${userdata.Username}`)
    .then(response => {
      alert('Profile has beeen deleted');
      localStorage.removeItem('user');
      localStorage.removeItem('token')

      window.open('/', '_self');
    })
    .catch(e => {
      console.log(e);
    });
  }

  const removeFav = (id) => {
    axios.delete(`https://mysterious-wildwood-desperado.herokuapp.com/users/${userdata.Username}/movies/${id}`)
        .then(() => {
            // Change state of favoriteMovieList to render component
            setFavoriteMoviesList(favoriteMoviesList.filter(movie => movie._id != id));
        })
        .catch(e => {
            console.log(e);
        });
}


return (
    
    <Container>
    <Row>
    
        <Col xs ={12} sm={4}>
        <Card>
          <Card.Body>
            <UserData userdata={userdata} />
          </Card.Body>
        </Card>
        </Col>
        
       
        <Col xs ={12} sm={8}>
        <Card>
          <Card.Body>    
            <UpdatedUser userdata={userdata} handleSubmit={handleSubmit} handleUpdate={handleUpdate} />
          </Card.Body>
        </Card>
        </Col>
        
        <div>
        <NavLink href="/"> 
        <Button variant="link"> Back to Movies </Button>
        </NavLink>
        </div >

      <div>
        <FavoriteMovies favoriteMoviesList={favoriteMoviesList} removeFav={removeFav} />
        </div>  
        <div>
            <Button className="mb-3" variant="danger" type="submit" style={{margin: 200}} onClick={deleteProfile}>
                Delete Profile
            </Button>
        </div>
  
    </Row>
    </Container>
    
);
}  