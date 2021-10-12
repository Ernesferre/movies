import React, { useState, useEffect } from "react";
import Jump from "react-reveal/Jump";
import MoviesList from "./MoviesList";
import { getMovies } from "./helpers/getMovies";
import { Box, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import SortingOptions from "./SortingOptions";
import Loader from "./Loader";

const MovieLibrary = () => {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(2);
  const [loading, setloading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    setloading(true);
    getMovies(page).then((res) => {
      setMovies((prev) => [...prev, ...res.results]);
      setloading(false);
    });
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
              setSort={setSort}
            />
          </HStack>
        </Jump>
      </HStack>

      <Box h="30rem" overflowY="scroll" onScroll={handleScroll}>
        {movies.length ? <MoviesList movies={movies} /> : <Loader />}
        {loading && (
          <Text w="20rem" m="2rem auto" textAlign="center" color="white">
            Loading movies...
          </Text>
        )}
      </Box>
    </>
  );
};

export default MovieLibrary;
