import { VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "../model";
import { useIsMobile } from "../hooks";

const projects = getProjects();

export const Projects = () => {
  const [isMobile] = useIsMobile();

  return (
    <VStack width="80%" spacing={4}>
      <Heading size="lg">Мои проекты</Heading>

      <SimpleGrid columns={isMobile ? 1 : 2} spacing={10} w="100%">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </SimpleGrid>
    </VStack>
  );
};
