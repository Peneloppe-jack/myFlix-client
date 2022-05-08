import React from "react";
import axios from "axios";

import { connect } from "react-redux";

import { setMovies } from "../../actions/actions";

import  MoviesList  from '../movies-list/movies-list';


import{ BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import MoviesList from '../movies-list/movies-list';
//import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { RegistrationView } from '../registration-view/registration-view';
import { GenreView } from "../genre-view/genre.view";
import { DirectorView } from "../director-view/director-view";
import { ProfileView } from "../profile-view/profile-view";
import { NavbarView } from "../navbar-view/navbar-view";
import Col  from 'react-bootstrap/Col'; 
import Row from 'react-bootstrap/Row';
import Container  from "react-bootstrap/Container";
import { NavbarView } from "../navbar-view/navbar-view";


class MainView extends React.Component {

  constructor() {
    super();
    //Initial State is set to null
      this.state ={
        user: null
      };
    }



getMovies(token) {
    axios.get('https://mysterious-wildwood-desperado.herokuapp.com/movies', {
      headers: { Authorization:`Bearer ${token}`}
    })
    .then((response) => {
      this.setState({
        movies: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
}
componentDidMount() {
  let accessToken = localStorage.getItem('token');
  if(accessToken !== null) {
    this.setState({
      user: localStorage.getItem('user')
    });
    this.getMovies(accessToken);
  }
}

/* When a user successfully logs in, this function updates the `user` property in state to that *particular user*/

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
  const { movies } = this.props;
  const { user } = this.state;

  return (
    <Router>
      <NavbarView user={user} />
      <Row className="main-view justify-content-md-center">

      <Route exact path="/" render={() => {
            if(!user) return  <Col>
             <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            if(movies.length === 0) return <div className="main-view" />;
            return <MoviesList movies={movies}/>
            
          }} />
          

          <Route path="/register" render={() => {
            if (user) return <Redirect to="/" />;
            return <Col lg={8} md={8}> <RegistrationView /></Col>
          }} />

          <Route path="/movies/:movieId"render={({ match, history }) => {
            if (!user)
              return (
                <Col><LoginView onLoggedIn={(user) => this.onLoggedIn(user)} /></Col> );
            if (movies.length === 0) return <div className="main-view" />;
            return (
              <Col md={8}> <MovieView movie={movies.find((m) => m._id === match.params.movieId)} onBackClick={() => history.goBack()}/></Col>
            );
          }}
         />


          <Route path="/genre/:name" render={({ match, history }) => {
            if (!user)
             return (
             <Col><LoginView onLoggedIn={(user) => this.onLoggedIn(user)} /></Col>
              );
            if (movies.length === 0) return <div className="main-view" />;
            return (
              <Col md={8}>
                <GenreView genre={ movies.find((m) => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()}/>
              </Col>
              );
            }}
          />


          <Route path="/director/:name"render={({ match, history }) => {
            if (!user)
            return ( <Col> <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} /> </Col> );
            if (movies.length === 0) return <div className="main-view" />;
            return (
              <Col md={8}> <DirectorView director={ movies.find((m) => m.Director.Name === match.params.name).Director}onBackClick={() => history.goBack()}
                />
              </Col>
            );
            }}
            />  

          <Route exact path="/profile" render={({ history }) => {
            if (!user) {
            return <Col> <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
            </Col>
            }
            return (
              <Col> <ProfileView movies={movies} onBackClick={() => history.goBack()} /> </Col>
           
            );
             }} />

        <Route path='/users/:username'
                render={({history, match}) => {
                  if(!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                  if(movies.length === 0) return <div className="main-view" />
                  return<Col>
                  
                  <ProfileView history={history} movies={movies} user={user} />
                  </Col>
                }} />


            <Route path={'/user-update/${user}'}
                    render={({match, history}) => {
                      if(!user) return <Redirect to="/" />
                      return <Col>
                        <UserUpdate user={user}
                        onBackClick={() => history.goBack()}/>
                      </Col>
                    }} />
      </Row>
    </Router>
  );
}
}
        

let mapStateToProps = state => {
  return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies }) (MainView);