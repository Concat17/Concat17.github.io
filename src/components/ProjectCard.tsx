import {
  Link,
  Text,
  VStack,
  Heading,
  CardHeader,
  Card,
  CardBody,
  Image,
  Center,
} from "@chakra-ui/react";
import { ProjectType } from "../type";

type ProjectCardProps = ProjectType;

export const ProjectCard = ({
  name,
  description,
  url,
  previewImgUrl,
  repoUrl,
}: ProjectCardProps) => (
  <Card bg="gray.700">
    <CardHeader>
      <Heading size="md" variant="link">
        <Link href={url}>{name}</Link>
      </Heading>
    </CardHeader>

    <CardBody>
      <VStack spacing={4}>
        <Center>
          <Image
            src={previewImgUrl}
            alt={`${name} preview`}
            borderRadius="lg"
            height="300px"
          />
        </Center>
        <Text>{description}</Text>
        <Text variant="link">
          <Link href={repoUrl}>Репозиторий</Link>
        </Text>
      </VStack>
    </CardBody>
  </Card>
);
