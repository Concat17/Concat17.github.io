import { useState } from "react";
import reactLogo from "./assets/react.svg";

import {
  Box,
  Text,
  ChakraProvider,
  VStack,
  Center,
  Flex,
  Image,
} from "@chakra-ui/react";
import { theme } from "./theme";
import { AboutMe, Contacts, Greeting, Projects } from "./components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ChakraProvider theme={theme}>
      <VStack
        spacing="8"
        minH="100vh"
        width="100%"
        py={12}
        px={20}
        bg="gray.800"
      >
        <Flex gap={8}>
          <Box>
            <Image src="https://iili.io/HBmjpEl.png" height="400px"></Image>
            <Text as="sub" color="gray.600">
              Мое лицо, когда я пытаюсь подвинуть кнопку на 10px
            </Text>
          </Box>

          <Flex direction="column" alignItems="center" gap={12} w={"xl"}>
            <Greeting />
            <AboutMe />
            <Contacts />
          </Flex>
        </Flex>

        <Projects />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
