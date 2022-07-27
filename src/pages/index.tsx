import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';

export default function Home() {
  return (
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
          <FormControl>
            <FormLabel htmlFor="email" color="gray.400">
              Email or phone number
            </FormLabel>
            <Input
              name="email"
              type="email"
              focusBorderColor="gray.800"
              bgColor="gray.800"
              size="lg"
              variant="filled"
              _hover={{
                bgColor: 'gray.800',
              }}
              _focus={{
                bgColor: 'gray.800',
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password" color="gray.400">
              Password
            </FormLabel>
            <Input
              name="password"
              type="password"
              focusBorderColor="gray.800"
              bgColor="gray.800"
              size="lg"
              variant="filled"
              _hover={{
                bgColor: 'gray.800',
              }}
              _focus={{
                bgColor: 'gray.800',
              }}
            />
          </FormControl>
        </Stack>

        <Button
          type="submit"
          mt="20"
          colorScheme="red"
          bg="red.500"
          size="lg"
          opacity="1"
        >
          Sign In
        </Button>
        <Flex
          align="center"
          justify="space-between"
          mt="2"
          fontWeight="light"
          color="gray.500"
        >
          <Checkbox colorScheme="gray" iconColor="black" defaultChecked>
            Remember me
          </Checkbox>
          <Link href="/LoginHelp">Need help?</Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
