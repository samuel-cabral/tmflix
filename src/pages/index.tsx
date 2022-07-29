import { Button, Checkbox, Flex, Link, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { Input } from '../components/Form/Input';
import { useAuth } from '../hooks/useAuth';
import { withSSRGuest } from '../utils/withSSRGuest';

interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object({
  email: yup
    .string()
    .required('Informe um email válido.')
    .email('Informe um email como: johndoe@example.com'),
  password: yup.string().required('A senha deve ter entre 4 e 60 caracteres.'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const { errors } = formState;
  const { signIn } = useAuth();

  const handleSignIn: SubmitHandler<FieldValues> = async values => {
    await signIn(values as SignInFormData);
  };
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
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Text fontSize="4xl" mb="8" fontWeight="bold">
            Sign In
          </Text>
          <Stack spacing="4">
            <Input
              type="email"
              label="Email"
              error={errors.email}
              {...register('email')}
            />
            <Input
              type="password"
              label="Senha"
              error={errors.password}
              {...register('password')}
            />
          </Stack>

          <Button
            type="submit"
            mt="20"
            colorScheme="red"
            bg="red.500"
            size="lg"
            isLoading={formState.isSubmitting}
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

export const getServerSideProps = withSSRGuest(async context => {
  return {
    props: {},
  };
});
