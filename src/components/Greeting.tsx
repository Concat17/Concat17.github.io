import { Highlight, Heading } from "@chakra-ui/react";

export const Greeting = () => {
  return (
    <Heading as="h1" fontSize="3xl">
      <Highlight query={["Дмитрий"]} styles={{ px: "1", color: "white" }}>
        Привет, меня зовут Дмитрий
      </Highlight>
    </Heading>
  );
};
