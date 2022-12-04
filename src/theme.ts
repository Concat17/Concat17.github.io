import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "gray.200",
      },
      variants: {
        list: {
          color: "cyan.200",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "cyan.300",
      },
    },
  },
});
