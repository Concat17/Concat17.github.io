import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  components: {
    Text: {
      baseStyle: {
        color: "gray.200",
      },
      variants: {
        link: {
          color: "cyan.500",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "cyan.200",
      },
      variants: {
        link: {
          color: "cyan.500",
        },
      },
    },
  },
});
