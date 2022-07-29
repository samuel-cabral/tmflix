import { useEffect } from 'react';

import { Box, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { useAuth } from '../hooks/useAuth';
import { setupAPIClient } from '../services/api';
import { api } from '../services/apiClient';
import { withSSRAuth } from '../utils/withSSRAuth';

export default function Home() {
  const { user } = useAuth();

  useEffect(() => {
    api
      .get('auth/home')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  });

  return (
    <>
      <Head>
        <title>Início - Mtflix</title>
      </Head>
      <Box
        position="relative"
        h="140vh"
        bgGradient="linear(to-b, gray.900 /100, #010511)"
      >
        <Header />
        <Text>Browser: {user?.email}</Text>
        <Box as="main">
          <Banner />
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </Box>
        {/* Modal */}
      </Box>
    </>
  );
}

export const getServerSideProps = withSSRAuth(async context => {
  const apiClient = setupAPIClient(context);
  const response = await apiClient.get('auth/home');

  console.log(response.data);

  return {
    props: {},
  };
});
