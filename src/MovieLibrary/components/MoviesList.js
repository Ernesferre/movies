import React, { useState } from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import MovieListItem from "./MovieListItem";
import Zoom from "react-reveal/Zoom";

const MoviesList = ({ movies }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [movieData, setMovieData] = useState({});

  const showMovie = (id) => {
    const movieSelected = movies.find((movie) => movie.id == id);
    setMovieData(movieSelected);
  };

  return (
    <Zoom>
      <Box color="white" mx="auto">
        <Box>
          <Flex
            flexWrap="wrap"
            mt="1rem"
            justifyContent="space-between"
            w={["90%", "100%"]}
            mx="auto"
            mb="3rem"
          >
            {movies.map((movie) => (
              <Flex key={movie.id} mx="auto" mb="1rem" my="auto" p="0.5rem">
                <MovieListItem
                  movie={movie}
                  showMovie={showMovie}
                  onOpen={onOpen}
                />
              </Flex>
            ))}
          </Flex>
        </Box>

        <Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
              bg="yellow.300"
              color="black"
              w={["85%", "70%", "50%"]}
            >
              <Box textAlign="left" display="flex" flexDirection="column">
                <ModalHeader textAlign="left">
                  <Text
                    textAlign="left"
                    fontWeight="bold"
                    fontSize="2rem"
                    mb="-1rem"
                  >
                    {movieData.title}
                  </Text>
                </ModalHeader>

                <ModalCloseButton />

                <ModalBody>
                  <Text> {movieData.overview} </Text>
                </ModalBody>

                <ModalFooter justifyContent="center">
                  <Text fontWeight="bold">
                    Ranking: {movieData.vote_average}
                  </Text>
                </ModalFooter>
              </Box>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Zoom>
  );
};

export default MoviesList;
