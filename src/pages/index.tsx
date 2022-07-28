import { Button, Checkbox, Flex, Link, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Input } from '../components/Form/Input';

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Mtflix</title>
      </Head>
      <Flex
        w="100vw"
        h="100vh"
        align="center"
        justify="center"
        bgImage="linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/signin_bg.jpg')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Flex
          as="form"
          width="100%"
          maxWidth={460}
          bg="rgba(0,0,0, 0.7);"
          p="16"
          borderRadius={8}
          flexDir="column"
        >
          <Text fontSize="4xl" mb="8" fontWeight="bold">
            Sign In
          </Text>
          <Stack spacing="4">
            <Input name="email" type="email" label="Email" />
            <Input name="password" type="password" label="Senha" />
          </Stack>

          <Button
            type="submit"
            mt="20"
            colorScheme="red"
            bg="red.500"
            size="lg"
            opacity="1"
          >
            Entrar
          </Button>
          <Flex
            align="center"
            justify="space-between"
            mt="2"
            fontWeight="light"
            color="gray.500"
          >
            <Checkbox colorScheme="gray" iconColor="black" defaultChecked>
              Lembre-se de mim
            </Checkbox>
            <Link href="/LoginHelp">Precisa de ajuda?</Link>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
