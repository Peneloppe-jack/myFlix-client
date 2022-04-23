//Main container
import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

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

export default MainView;
