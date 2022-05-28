const Select = {
  baseStyle: {
    field: {
      textTransform: 'uppercase',
    },
  },
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: 'primary',
        },
        _invalid: {
          borderColor: 'error',
        },
      },
    },
  },
  defaultProps: {
    colorScheme: 'brand',
  },
};

export default Select;
