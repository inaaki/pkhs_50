const Badge = {
  variants: {
    primary: ({ colorScheme }) => {
      return {
        color: 'white',
        borderRadius: 'sm',
        letterSpacing: '1px',
        background: `${colorScheme}.500`,
      };
    },
  },
  sizes: {
    md: {
      fontSize: 'xs',
      fontWeight: '600',
      px: 1.5,
      py: 0.5,
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
};

export default Badge;
