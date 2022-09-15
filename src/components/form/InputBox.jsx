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
  onBlur,
  onChange,
  placeholder,
  rightElement,
  type,
  ...props
}) {
  //UI hooks
  const inputSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const inputIconSize = useBreakpointValue({ base: 8, md: 10 });

  //formik hooks
  const [field, meta] = useField({ name, type });
  // console.log('field', field);
  // const { onBlur: formikOnBlur, onChange: formikOnChange } = field;
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
          // type={type || 'text'}
          type="number"
          {...field}
          //keep field props above custom onFunc for override
          // onChange={() => {
          //   onChange?.();
          //   formikOnChange();
          // }}
          // onBlur={() => {
          //   onBlur?.();
          //   formikOnBlur();
          // }}
          {...props}
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
