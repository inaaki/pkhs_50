const Button = {
  baseStyle: {
    transition: 'all 150ms cubic-bezier(0.4, 0, 0.2, 1)',
    textTransform: 'capitalize',
    _active: {
      transform: 'scale(1.05)',
    },
  },
  sizes: {
    cta: {
      width: '60',
      height: '12',
      fontSize: 'xl',
    },
    form: {
      width: '32',
      height: '10',
    },
  },
  variants: {
    cta: {
      color: 'white',
      bg: 'brand.500',
      borderRadius: 'md',
      _hover: {
        bg: 'brand.600',
      },
      _active: {
        bg: 'brand.700',
      },
    },
  },
  defaultProps: {
    colorScheme: 'brand',
    variant: 'solid',
  },
};

export default Button;
