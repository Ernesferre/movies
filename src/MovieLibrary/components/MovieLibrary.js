import React, { useState, useEffect } from "react";
import Jump from "react-reveal/Jump";
import MoviesList from "./MoviesList";
import { productsFetch } from "../mocks/topTatedMovies.js";
import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import SortingOptions from "./SortingOptions";

const MovieLibrary = () => {
  const [movies, setMovies] = useState([]);
  const [clickButton, setclickButton] = useState(false);

  useEffect(() => {
    if (clickButton) {
      setMovies(movies);
      setclickButton(false);
    } else {
      productsFetch.then((res) => {
        setMovies(res);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickButton]);

  const handleRefresh = () => {
    window.location.replace("/");
  };

  return (
    <>
      <HStack bg="brand.secondary" position="sticky" top="0" zIndex="1">
        <Jump>
          <Heading
            color="yellow.300"
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
        <Jump>
          <HStack p="1rem">
            <SortingOptions
              movies={movies}
              setMovies={setMovies}
              setclickButton={setclickButton}
            />
          </HStack>
        </Jump>
      </HStack>

      <Box>{movies.length && <MoviesList movies={movies} />}</Box>
    </>
  );
};

export default MovieLibrary;
