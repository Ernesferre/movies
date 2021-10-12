import React, { useState, useEffect } from "react";
import Jump from "react-reveal/Jump";
import MoviesList from "./MoviesList";
import { getMovies } from "./helpers/getMovies";
import { Box, Heading, HStack, Spacer } from "@chakra-ui/react";
import SortingOptions from "./SortingOptions";
import Loader from "./Loader";
import Pages from "./Pages";

const MovieLibrary = () => {
  const [movies, setMovies] = useState([]);

  // const [clickButton, setclickButton] = useState(false);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState();

  useEffect(() => {
    getMovies(page)
      .then((res) => {
        setMovies(res.results);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
              // setclickButton={setclickButton}
              setSort={setSort}
            />
          </HStack>
        </Jump>
      </HStack>

      <Box>{movies.length ? <MoviesList movies={movies} /> : <Loader />}</Box>

      <Box
        textAlign="center"
        color="yellow"
        fontSize="2rem"
        mt="1rem"
        mb="2rem"
      >
        <Pages
          setPage={setPage}
          // setclickButton={setclickButton}
        />
      </Box>
    </>
  );
};

export default MovieLibrary;
