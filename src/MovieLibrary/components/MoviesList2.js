import { Box } from "@chakra-ui/layout";
import React from "react";
import "./MoviesList.css";
import classNames from "classnames";
import MovieListItem from "./MovieListItem";
import SortingOptions from "./SortingOptions";

const MoviesList2 = ({ movies }) => {
  return (
    <Box bg="white" color="black">
      <div className="movies-list">
        <div className="items">
          <div>
            <span>Sort by:</span>
            <SortingOptions
            // onChange={this.handleSortingChange}
            />
          </div>
          {movies.map((movie) => (
            <MovieListItem
              key={movie.id}
              movie={movie}
              // isSelected={selectedMovie===movie}
              // onSelect={this.handleSelectMovie}
            />
          ))}
        </div>
        {/* {
          selectedMovie && (
            <ExpandedMovieItem movie={selectedMovie} />
          )
        } */}
      </div>
    </Box>
  );
};

export default MoviesList2;
