import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';

function InputBox({
  label,
  leftElement,
  name,
  placeholder,
  rightElement,
  type = 'text',
  ...props
}) {
  //UI hooks
  const inputSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const inputIconSize = useBreakpointValue({ base: 8, md: 10 });

  //formik hooks
  const [field, meta] = useField({ name, type });
  const { error, touched } = meta;
  return (
    <FormControl isInvalid={touched && error}>
      <FormLabel size={inputSize} htmlFor={name}>
        {label || ''}
      </FormLabel>
      <InputGroup>
        {leftElement && (
          <InputLeftElement
            boxSize={inputIconSize}
            children={leftElement}
            pointerEvents="none"
          />
        )}
        <Input
          id={name}
          placeholder={placeholder}
          size={inputSize}
          type={type}
          {...props}
          {...field}
        />
        {rightElement && (
          <InputRightElement boxSize={inputIconSize} children={rightElement} />
        )}
      </InputGroup>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default InputBox;
