import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    primary: "#48cae4",
    secondary: "#CE233A",
    accent: "#09A6F3",
  },
};

const styles = {
  global: {
    "html, body": {
      color: "white",
      bg: "black",
    },
  },
};

export const theme = extendTheme({ colors, styles });
