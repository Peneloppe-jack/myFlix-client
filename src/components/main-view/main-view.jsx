import React from 'react';
import axios from 'axios';

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

//import './movie-view.scss'
//import Button from 'react-bootstrap/Button';


export class MainView extends React.Component {
constructor(){ 
    super();
    this.state = {
    movies: [],
    selectedMovies:null,
    user: null };
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

setSelectedMovie(newSelectedMovie) { 
     this.setState({selectedMovie: newSelectedMovie });
     }

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
        
    return (
        <div className="main-view">
            {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map((movie, index) => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(newSelectedMovie) => { this.setSelectedMovie(newSelectedMovie) }} />
                    ))
                }
            </div>
        );
    }

}
        
export default MainView;
