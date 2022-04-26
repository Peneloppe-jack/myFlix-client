import PropTypes from 'prop-types';

    DirectorView.propTypes = {
      Director: PropTypes.shape({
          Name: PropTypes.string.isRequired,
          Bio: PropTypes.string.isRequired
          }).isRequired,
          onMovieClick: PropTypes.func.isRequired
      };