import React from "react";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { sortFunction } from "../components/helpers/sortFunction";

const SortingOptions = ({ movies, setMovies, setSort }) => {
  const handleSort = (sort, mov) => {
    sortFunction(sort, mov);
    setMovies(mov);
    setSort(sort);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="yellow.300"
        color="black"
        fontFamily="heading"
        rightIcon={<ChevronDownIcon />}
        _hover={{
          backgroundColor: "yellow.500",
        }}
      >
        Sort by
      </MenuButton>
      <MenuList bg="green.400" color="black" w="5rem">
        <MenuItem
          onClick={() => {
            handleSort("up", movies);
          }}
        >
          A -> Z
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSort("down", movies);
          }}
        >
          Z -> A
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSort("rating", movies);
          }}
        >
          Rating
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortingOptions;
