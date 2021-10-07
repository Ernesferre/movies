import React, { useState } from "react";
import Jump from "react-reveal/Jump";
import MoviesList from "./MoviesList";
import topRatedMovies from "../mocks/topTatedMovies";
import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import SortingOptions from "./SortingOptions";

const MovieLibrary = () => {
  const [movies, setMovies] = useState(topRatedMovies);

  const handleRefresh = () => {
    window.location.replace("/");
  };

  return (
    <>
      <HStack bg="brand.secondary" position="sticky" top="0" zIndex="1">
        <Jump>
          <Heading
            color="black"
            fontWeight="extrabold"
            p="1rem"
            fontFamily="Josefin Sans"
            cursor="pointer"
            onClick={handleRefresh}
          >
            Movies
          </Heading>
        </Jump>
        <Spacer></Spacer>
        <HStack p="1rem">
          <Spacer></Spacer>
          <SortingOptions />
        </HStack>
      </HStack>

      <Box>{movies.length && <MoviesList movies={movies} />}</Box>
    </>
  );
};

export default MovieLibrary;
