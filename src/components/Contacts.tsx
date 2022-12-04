import {
  List,
  ListItem,
  ListIcon,
  Icon,
  Text,
  Flex,
  Box,
  Heading,
  Center,
  Link,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon, EmailIcon } from "@chakra-ui/icons";

export const Contacts = () => (
  <Flex direction="column" alignItems="center" gap={4}>
    <Heading size="lg">Контакты</Heading>
    <List spacing={3}>
      <ListItem>
        <Flex gap={2}>
          <Text variant="list">Email: </Text>
          <Text> d.kurenkov17@gmail.com</Text>
        </Flex>
      </ListItem>
      <ListItem>
        <Flex gap={2}>
          <Text variant="list">Telegram: </Text>
          <Text>@Concat17</Text>
        </Flex>
      </ListItem>
      <ListItem>
        <Text variant="list">
          <Link href="https://github.com/Concat17">Github</Link>
        </Text>
      </ListItem>
      <ListItem>
        <Text variant="list">
          <Link href="https://tver.hh.ru/resume_converter/%D0%9A%D1%83%D1%80%D0%B5%D0%BD%D0%BA%D0%BE%D0%B2%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%20%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B5%D0%B2%D0%B8%D1%87.pdf?hash=0d5b452eff0b42ba170039ed1f653368574e69&type=pdf&hhtmSource=resume&hhtmFrom=resume_list">
            Скачать резюме c HeadHunter
          </Link>
        </Text>
      </ListItem>
    </List>
  </Flex>
);
