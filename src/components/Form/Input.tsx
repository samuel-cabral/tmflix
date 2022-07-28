import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && (
        <FormLabel htmlFor={name} color="gray.400">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="gray.800"
        bgColor="gray.800"
        variant="filled"
        _hover={{
          bgColor: 'gray.800',
        }}
        _focus={{
          bgColor: 'gray.800',
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
