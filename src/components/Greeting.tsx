import { Box, Text, Highlight, Heading } from "@chakra-ui/react";

export const Greeting = () => {
  return (
    <Heading as="h1" fontSize="3xl">
      <Highlight query={["Дмитрий"]} styles={{ px: "1", bg: "teal.100" }}>
        Привет, меня зовут Дмитрий!
      </Highlight>
    </Heading>
  );
};
