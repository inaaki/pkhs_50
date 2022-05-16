const Select = {
  baseStyle: {
    field: {
      textTransform: 'uppercase',
    },
  },
  variants: {
    filled: ({ colorScheme: c }) => {
      return {
        field: {
          _focus: {
            borderColor: `${c}.500`,
          },
        },
      };
    },
  },
  defaultProps: {
    colorScheme: 'brand',
  },
};

export default Select;
