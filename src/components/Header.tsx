import { useState, useEffect } from 'react';

import {
  Avatar,
  Button,
  Flex,
  FlexProps,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  Text,
} from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine } from 'react-icons/ri';
import { FaChevronDown } from 'react-icons/fa';
import { Logo } from './Logo';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="header"
      position="fixed"
      top={0}
      w="100%"
      h="16"
      mx="auto"
      px="6"
      align="center"
      bg={isScrolled ? 'gray.900' : 'transparent'}
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
