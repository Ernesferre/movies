import React from "react";
import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { sortFunction } from "../components/helpers/sortFunction";

const SortingOptions = ({ movies, setMovies, setclickButton }) => {
  const handleSort = (sort, mov) => {
    sortFunction(sort, mov);
    setMovies(mov);
    setclickButton(true);
  };

  return (
    <Menu bg="white">
      <MenuButton
        as={Button}
        bg="yellow.300"
        color="black"
        fontFamily="heading"
        rightIcon={<ChevronDownIcon />}
        _hover={{
          backgroundColor: "yellow.300",
          color: "black",
        }}
      >
        Sort by
      </MenuButton>
      <MenuList bg="brand.primary" color="black" w="10rem">
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
