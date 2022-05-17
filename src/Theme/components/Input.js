const Input = {
  variants: {
    filled: {
      field: {
        color: 'gray.600',
        fontWeight: '500',
        _focus: {
          borderColor: 'brand.500',
        },
        _invalid: {
          borderColor: 'red.400',
        },
        _placeholder: {
          fontWeight: '400',
          color: 'gray.400',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'filled',
  },
};

export default Input;
