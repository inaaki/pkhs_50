const Input = {
  variants: {
    filled: {
      field: {
        color: 'textHighlight',
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
  sizes:{
    md:{
      field:{
        fontSize:'lg'
      }
    }
  },
  defaultProps: {
    size: 'md',
    variant: 'filled',
  },
};

export default Input;
