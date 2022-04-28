import React from 'react';
import axios from 'axios';
import {Navbar, Nav, Button, Container, Row, Col} from 'react-bootstrap';

import "./main-view.scss"

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';


//import { Button } from '../button-view/button-view';


export class MainView extends React.Component {
constructor(){ 
    super();
    this.state = {
    movies: [],
    selectedMovies:null,
    user: null 
    };
    }

componentDidMount(){
    axios.get('https://mysterious-wildwood-desperado.herokuapp.com/movies')
    .then(Response => {
        this.setState({
         movies: Response.data });
     })
   .catch(error => {
        console.log(error);
        });
    }


    setSelectedMovie(movie) { 
        this.setState({selectedMovie: movie });
        }
   
//setSelectedMovie(newSelectedMovie) { 
    // this.setState({selectedMovie: newSelectedMovie });
     //}

 onRegistration(register) {
        this.setState({ register }); 
    }
    
onLoggedIn(user) {
        this.setState({ user });
    }

    render() {
        const { movies, selectedMovie, user, register } = this.state;
        
            if (!register ) return <RegistrationView onRegister={(register) => this.onRegister(register)} />;
         
            if (!user) return <LoginView onLoggedIn={(user) => this.onLoggedIn(user)} />;
           
            if (movies.length === 0) return <div className="main-view"/>;
          
         /*https://getbootstrap.com/docs/4.0/components/navbar/*/   
            return (
        
                <div className="main-view">
                <Navbar bg="navColor" variant="dark" expand="lg">
                  <Container fluid>
                  <Navbar.Brand href="#home">my Flix </Navbar.Brand>
                  <Nav className="me-auto">
                  <Nav.Link href="#home">Movies</Nav.Link>
                  <Nav.Link href="#user">Profile</Nav.Link>
                    <Nav.Link href="#login">Sign in</Nav.Link>
                    <Nav.Link href="#register">Sign up</Nav.Link>
                    </Nav>
                  </Container>
                </Navbar>
                 <div>
        
        
                <Container fluid>
                     <Row className="main-view justify-content-md-center">
                        {selectedMovie
                        ? (
                            <Col md={8}>
                            <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                            </Col>
        
                        )
                        : movies.map(movie => (
                        <Col md={3}>
                        <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                        </Col>
                         ))
                        }
                     </Row>
                 </Container>
               </div>
            </div>       
            );
          }
        }
          
        
        export default MainView;
