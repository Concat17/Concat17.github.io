import { Highlight, Heading } from "@chakra-ui/react";
import { useIsMobile } from "../hooks";

export const Greeting = () => {
  const [isMobile] = useIsMobile();
  return (
    <Heading
      width={isMobile ? "350px" : undefined}
      textAlign={isMobile ? "center" : undefined}
      as="h2"
      fontSize="3xl"
    >
      <Highlight query={["Дмитрий"]} styles={{ px: "1", color: "white" }}>
        Привет, меня зовут Дмитрий
      </Highlight>
    </Heading>
  );
};
