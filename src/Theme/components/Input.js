const Input = {
  variants: {
    filled: {
      field: {
        color: 'textHighlight',
        fontWeight: '500',
        _focus: {
          borderColor: 'primary',
        },
        _invalid: {
          borderColor: 'error',
        },
        _placeholder: {
          fontWeight: '400',
          color: 'gray.400',
        },
      },
    },
  },
  sizes: {
    md: {
      field: {
        width: 'sm',
      },
    },
  },
  defaultProps: {
    variant: 'filled',
  },
};

export default Input;
