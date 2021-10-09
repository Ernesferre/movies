import React from "react";
import { Img } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import Pulse from "react-reveal/Pulse";
import { CircularProgress, CircularProgressLabel, Box } from "@chakra-ui/react";

const MovieListItem = ({ movie, showMovie, onOpen }) => {
  console.log(movie.vote_average * 10);

  return (
    <Pulse>
      <Container onClick={onOpen}>
        <Box
          onClick="disable"
          textAlign="right"
          mr="-1rem"
          position="relative"
          bottom="-1.5rem"
        >
          <CircularProgress
            value={movie.vote_average * 10}
            color="green"
            bg="white"
            borderRadius="full"
          >
            <CircularProgressLabel color="black" fontWeight="bold">
              {movie.vote_average * 10}%
            </CircularProgressLabel>
          </CircularProgress>
        </Box>

        <Img
          src={`${"https://image.tmdb.org/t/p/w500/"}${movie.poster_path}`}
          alt={movie.title}
          w={["15rem", "10rem"]}
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
