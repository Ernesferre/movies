import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
// import "./MoviesList.css";
import classNames from "classnames";
import MovieListItem from "./MovieListItem";
import SortingOptions from "./SortingOptions";

const MoviesList2 = ({ movies }) => {
  return (
    <Box bg="white" color="black" mx="auto">
      <div className="movies-list">
        <div className="items">
          <div>
            <span>Sort by:</span>
            <SortingOptions
            // onChange={this.handleSortingChange}
            />
          </div>

          <Flex
            flexWrap="wrap"
            mt="3rem"
            justifyContent="space-between"
            w={["90%", "80%", "80%"]}
            mx="auto"
            mb="3rem"
          >
            {movies.map((movie) => (
              <Flex mx="auto" mb="1rem" my="auto" p="0.5rem">
                <MovieListItem
                  key={movie.id}
                  movie={movie}
                  // isSelected={selectedMovie===movie}
                  // onSelect={this.handleSelectMovie}
                />
              </Flex>
            ))}
          </Flex>
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
