SingleMovieView.propTypes = {
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
    onClick: PropTypes.func.isRequired
  };