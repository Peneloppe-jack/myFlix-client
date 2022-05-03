import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Navbar, Nav, Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

//import { Button } from '../button-view/button-view';

import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { GenreView } from "../genre-view/genre.view";
import { DirectorView } from "../director-view/director-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavbarView } from "../navbar-view/navbar-view";

import './main-view.scss'

export class MainView extends React.Component {

  constructor() {
    super();

    this.state = {
      movies: [],
      user: null
    };
  }

getMovies(token) {
    axios.get('https://mysterious-wildwood-desperado.herokuapp.com/movies', {
      headers: { Authorization:`Bearer ${token}`}
    })
      .then(response => {
        //Assign the result to the state
        this.setState({ movies: response.data 
        }); 
      })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }
//When a user logs in, the props onLoggedIn(data) is passed to the LoginView 
//and triggers the function onLoggedIn(authData) in the MainView.
// This updates the state with the logged in authData
    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
          user: authData.user.Username
        })
        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
      }
  
  onLoggedOut() {
       localStorage.removeItem('token');
       localStorage.removeItem('user');
       this.setState({
       user: null
    });
  }
    render() {

      let { movies } = this.props;
      let { user } = this.state;

      return (
        <Router>
        <NavbarView user={user} />
        <Row className="main-view justify-content-md-center">
          <Route exact path="/" render={() => {
              if (!user)
                return (
                  <Col>
                    <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />
                  </Col>
                );

              if (movies.length === 0) return <div className="main-view" />;
              return movies.map((m) => (
                <Col md={3} key={m._id}>
                  <MovieCard movie={m} />
                </Col>
              ));
            }}
          />
  
            <Route path="/register" render={() => {
              if (user) return <Redirect to="/" />
              return <Col>
              <RegistrationView />
              </Col>
            }} />
  
            <Route path="/movies/:movieId" render={({ match, history }) => {
              if(!user) return  <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
             </Col>
              if(movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                </Col>
            }} />
  
            <Route exact path="/director/:name" render={( { match, history }) => {
              if(!user) return  <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
             </Col>
              if(movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <DirectorView director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()}/>
              </Col>
            }}/>
  
            <Route exact path="/genre/:name" render={( { match, history } ) => {
              if(!user) return  <Col>
              <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
             </Col>
              if(movies.length === 0) return <div className="main-view" />;
              return <Col md={8}>
                <GenreView genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()}/>
              </Col>
            }} />


           <Route exact path="/profile" render={({ history }) => {
             if (!user) { return ( <Col><LoginView onLoggedIn={user => this.onLoggedIn(user)} /></Col>);}
             if(movies.length === 0) return <div className="main-view" />;
             return 
              <Col md={8}>
                  <ProfileView movies={movies} onBackClick={() => history.goBack()} />
              </Col>
                                  
           }} />

            <Route path={`/users/${user}`} render={({ history }) => {
            if (!user) return <Redirect to="/" />
            return <Col>
            <ProfileView user={user}
             onBackClick={() => history.goBack()} />
            </Col>
             }} />
           </Row>
          </Router> 
            
            );    
          }
        }
        
        export default MainView;