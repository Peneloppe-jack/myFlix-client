import React from 'react';
import PropTypes from 'prop-types';

export class MovieView extends React.Component {

  keypressCallback(event) {
    console.log(event.key);
}

//Add Keypress event listener
componentDidMount() {
    document.addEventListener('keypress', this.keypressCallback);
}

//Unmount event listener
componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressCallback);
}
// should I keep this Code though

    render() {

        const { movie, onBackClick } = this.props;
        return (

          <div className="movie-view">
          <div className="movie-poster">
            <img src={movie.ImagePath} />
            </div>

            <div className="movie-title">
              <span className="label">Title: </span>
              <span className="value">{movie.Title}</span>
            </div>

            <div className="movie-description">
              <span className="label">Description: </span>
              <span className="value">{movie.Description}</span>
            </div>

            <button onClick={() => { onBackClick(null); }}>Back</button>
           </div>
        );
      }
    }

//Adding click event listener / MovieCard 
//cf MovieCard here props = movie object - Les poupees russes !
//rendering details about movies (movie.title/descript/img) 
// MovieView displayed on movieCard within MainView


MovieView.propTypes = {
  movie: PropTypes.shape({
      ImagePath: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Description: PropTypes.string.isRequired,
      Genre: PropTypes.shape({
          Name: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired
        }),
  }).isRequired,
  onBackClick: PropTypes.func.isRequired
};
