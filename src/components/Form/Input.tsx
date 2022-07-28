import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref,
) => {
  const invalidInputStyle = {
    borderBottomColor: 'orange.500',
  };

  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor={name} color="gray.400">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="none"
        bgColor="gray.800"
        variant="filled"
        _hover={{
          bgColor: 'gray.800',
        }}
        _focus={{
          bgColor: 'gray.800',
        }}
        _blur={invalidInputStyle}
        _invalid={invalidInputStyle}
        size="lg"
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage color="orange.500">{error.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
