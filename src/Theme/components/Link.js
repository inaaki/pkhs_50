const Link = {
  baseStyle: {
    textDecoration: 'none',
  },
  variants: {
    'nav-link': {
      textTransform: 'uppercase',
      fontWeight: '700',
      letterSpacing: '2px',
      color: 'gray.600',
      pos: 'relative',
      _after: {
        position: 'absolute',
        bottom: '-0.25rem',
        width: '100%',
        left: '0',
        height: '2px',
        bg: 'transparent',
        content: '""',
      },
      _hover: {
        textDecoration: 'none',
        color: 'brand.500',
        _after: {
          bg: 'currentColor',
        },
      },
    },
  },
};

export default Link;
