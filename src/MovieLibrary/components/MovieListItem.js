import React from "react";
import { Img } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import Pulse from "react-reveal/Pulse";

const MovieListItem = ({ movie, showMovie, onOpen }) => {
  return (
    <Pulse>
      <Container onClick={onOpen}>
        <Img
          src={`${"https://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
          alt={movie.title}
          w="10rem"
          borderRadius="1rem"
          webkittransform=""
          boxShadow="2xl"
          cursor="pointer"
          onClick={() => {
            showMovie(`${movie.id}`);
          }}
          _hover={{
            boxShadow: "0 0 20px #8e9273",
          }}
        />
      </Container>
    </Pulse>
  );
};

export default MovieListItem;
