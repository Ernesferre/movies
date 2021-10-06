import { Img } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import React from "react";

const MovieListItem = ({ movie }) => {
  return (
    <Container>
      {/* {movie.title} */}
      <Img
        src={`${"https://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
        alt="Movie Poster"
        w="10rem"
      />
    </Container>
  );
};

export default MovieListItem;
