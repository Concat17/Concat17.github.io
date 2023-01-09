import { Text } from "@chakra-ui/react";
import { useIsMobile } from "../hooks";

export const AboutMe = () => {
  const [isMobile] = useIsMobile();

  return (
    <Text mt={0} width={isMobile ? "350px" : undefined} textAlign="center">
      Я начинающий frontend разработчик. Основными инструментами моей работы
      являются React и Typescript
    </Text>
  );
};
