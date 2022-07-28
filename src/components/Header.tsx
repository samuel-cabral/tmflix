import {
  Avatar,
  Button,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  Spacer,
  Text,
} from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine } from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa';
import { Logo } from './Logo';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1820}
      h="16"
      mx="auto"
      px="6"
      align="center"
    >
      <Logo />
      <Flex align="center" gap="4" ml="14">
        <Link href="/browse">Inicío</Link>
        <Link href="/series">Séries</Link>
        <Link href="/movies">Filmes</Link>
        <Link href="/latest">Bombando</Link>
        <Link href="/my-list">Minha lista</Link>
      </Flex>

      <Flex align="center" ml="auto">
        <HStack spacing="4">
          <Icon as={RiSearchLine} fontSize="20" />
          <Link href="/Kids">
            <Text>Infantil</Text>
          </Link>
          <Icon as={RiNotificationLine} fontSize="20" />
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaChevronDown />}
              bg="gray.900"
              _hover={{ bg: 'gray.900' }}
              _focus={{ bg: 'gray.900' }}
            >
              <Avatar
                size="sm"
                name="Samuel Cabral"
                src="https://github.com/samuel-cabral.png"
              />
            </MenuButton>
          </Menu>
        </HStack>
      </Flex>
    </Flex>
  );
}
