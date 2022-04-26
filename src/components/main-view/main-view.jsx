
import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { RegistrationView } from '../registration-view/registration-view';

import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap/Container';
import './main-view.scss'

export class MainView extends React.Component {

    constructor(){ 
        super();
        this.state = {
        movies: [],
        selectedMovies:null,
        user: null };
        }

setSelectedMovie(movie) { 
     this.setState({selectedMovie: movie });
     }

      //When a user successfully registers
onRegister(register) {
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
            <Nav.Link href="#logout">Logout</Nav.Link>
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
