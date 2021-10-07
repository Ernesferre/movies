import { Menu, Button, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";

const SortingOptions = () => {
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
        <MenuItem>A -> Z</MenuItem>
        <MenuItem>Z -> A</MenuItem>
        <MenuItem>Rating</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortingOptions;
