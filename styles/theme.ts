import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '900': '#141414',
      '500': '#5B5551',
      '50': '#E5E5E5',
    },
    red: {
      '500': '#E50914',
    },
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
      },
    },
  },
});
