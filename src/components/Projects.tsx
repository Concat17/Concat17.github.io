import {
  Link,
  Text,
  VStack,
  Heading,
  SimpleGrid,
  CardHeader,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const Projects = () => (
  <VStack width="80%">
    <Heading size="lg"> Мои проекты</Heading>

    <SimpleGrid columns={2} spacing={10} w="100%">
      <Card bg="gray.700">
        <CardHeader>
          <Heading size="md">
            <Link href="https://github-profiles-khaki.vercel.app/">
              Github profiles
            </Link>
          </Heading>
        </CardHeader>

        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Text>
            Приложение позволяет находить пользователей по логину, отображает их
            репозитории, а так же дает возможность просматривать коммиты в
            репозиториях пользователя. Используется API github.
          </Text>
        </CardBody>
      </Card>
      <Card bg="gray.700">
        <CardHeader>
          <Heading size="md">Client Report</Heading>
        </CardHeader>

        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
        </CardBody>
      </Card>
    </SimpleGrid>
  </VStack>
);
