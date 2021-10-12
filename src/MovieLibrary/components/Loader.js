import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Box textAlign="center" my="8rem">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="red.500"
        size="xl"
      />
    </Box>
  );
};

export default Loader;
