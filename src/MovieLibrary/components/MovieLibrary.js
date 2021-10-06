import React, { useState } from "react";
import logo from "./logo.svg";
import "./MovieLibrary.css";
import MoviesList2 from "./MoviesList2";
import topRatedMovies from "../mocks/topTatedMovies";
// import { fetchTopRatedMovies } from "../store/actions";
// import { getMovies } from "../store/selectors";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";

const MovieLibrary = () => {
  const [movies, setMovies] = useState(topRatedMovies);

  console.log(movies);

  return (
    <div className="MovieLibrary">
      <header className="ML-header">
        <img src={logo} className="ML-logo" alt="logo" />
        <h1 className="ML-title">Movies.</h1>
      </header>
      <div className="ML-intro">
        {movies.length && <MoviesList2 movies={movies} />}
      </div>
    </div>
  );
};

export default MovieLibrary;

// class MovieLibrary extends Component {
//   static propTypes = {};

//   componentDidMount() {
//     const { fetchTopRatedMovies } = this.props;
//     fetchTopRatedMovies();
//   }

//   render() {
//     const { movies } = this.props;
//     return (
//       <div className="MovieLibrary">
//         <header className="ML-header">
//           <img src={logo} className="ML-logo" alt="logo" />
//           <h1 className="ML-title">Movies.</h1>
//         </header>
//         <div className="ML-intro">
//           {movies.length && <MoviesList movies={movies} />}
//         </div>
//       </div>
//     );
//   }
// }

// export default connect(
//   (state) => ({
//     movies: getMovies(state),
//   }),
//   { fetchTopRatedMovies }
// )(MovieLibrary);
