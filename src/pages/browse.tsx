import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Header } from '../components/Header';

export default function Home() {
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
