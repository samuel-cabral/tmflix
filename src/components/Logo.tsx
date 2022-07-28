import { Text, TextProps as ChakraTextProps } from '@chakra-ui/react';

type TextProps = ChakraTextProps;

export function Logo({ ...props }: TextProps) {
  return (
    <Text
      fontSize="3xl"
      fontWeight="black"
      color="red.500"
      position="relative"
      letterSpacing="tight"
      // _before={{
      //   content: '""',
      //   position: 'absolute',
      //   background: 'gray.900',
      //   opacity: 0.7,
      //   zIndex: 3,
      //   width: '100%',
      //   height: '8px',
      //   bottom: '20px',
      //   borderRadius: '50% /100% 100% 0 0',
      // }}
    >
      TMFLIX
    </Text>
  );
}
