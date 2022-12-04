import { useState } from "react";
import reactLogo from "./assets/react.svg";

import {
  Box,
  Text,
  ChakraProvider,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import { theme } from "./theme";
import { AboutMe, Contacts, Greeting, Projects } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <VStack
        spacing="8"
        height="100vh"
        width="100%"
        py={8}
        px={20}
        bg="gray.800"
      >
        <Flex direction="column" alignItems="center" gap={4}>
          <Greeting />
          <AboutMe />
        </Flex>

        <Contacts />

        <Projects />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
