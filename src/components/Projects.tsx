import { VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { ProjectCard } from "./ProjectCard";
import { getProjects } from "../model";

const projects = getProjects();

export const Projects = () => (
  <VStack width="80%" spacing={4}>
    <Heading size="lg"> Мои проекты</Heading>

    <SimpleGrid columns={2} spacing={10} w="100%">
      {projects.map((p) => (
        <ProjectCard key={p.name} {...p} />
      ))}
    </SimpleGrid>
  </VStack>
);
