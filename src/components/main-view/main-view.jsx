//Main container
import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

<<<<<<< Updated upstream
=======
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap/Container';
import './movie-view.scss'

>>>>>>> Stashed changes
export class MainView extends React.Component {

constructor(){ 
    super();
    this.state = {
    movies: [
            { _id: 1, Title: 'Inception', 
            Description: 'A troubled thief who extracts secrets from the dreams of his victims. His last job : a dangerous mission to plant an idea in a the subuconcious of his target.', 
            ImagePath: 'https://fr.web.img2.acsta.net/medias/nmedia/18/72/34/14/19476654.jpg'},

            { _id: 2, Title: 'The Shawshank Redemption',
             Description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
              ImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqbck_Vr9qiTAwDkR7ln02KPTkRLdNtIud5RR3WkRfvKo0tei'},

            { _id: 3, Title: 'Gladiator',
             Description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.', 
             ImagePath: 'https://static.kino.de/wp-content/uploads/2015/08/gladiator-2000-filmplakat-rcm1200x1200u.jpg'}
            ],
            selectedMovies:null, /// initial value set on null renders a list as no movie as been selected
            };
          }

<<<<<<< Updated upstream
setSelectedMovie(newSelectedMovie) { 
     this.setState({
        selectedMovie: newSelectedMovie
        });
     }
render() {
    const { movies, selectedMovie } = this.state;
        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
        return (
        <div className="main-view">
            {selectedMovie
                ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>

                : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                 ))}</div>
            );
        }
} 
=======
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
  
>>>>>>> Stashed changes

export default MainView;
