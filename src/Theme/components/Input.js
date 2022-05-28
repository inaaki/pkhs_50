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
