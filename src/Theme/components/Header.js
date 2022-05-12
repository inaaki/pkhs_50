const Header = {
  baseStyle: {
    backgroundColor: 'white',
    pos: 'fixed',
    px: [3, 5, 2, 16],
    transition: 'all 250ms ease',
    width: 'full',
    zIndex: 'sticky',
  },
  sizes: {
    full: {
      width: 'full',
    },
    '2xl': { width: { base: '95%' } },
  },
  variants: {
    primary: {
      top: '0',
      left: '0',
    },
    secondary: {
      backdropFilter: 'blur(5px)',
      bg: 'rgba(255,255,255,0.5)',
      boxShadow: 'dark-lg',
      left: '50%',
      rounded: 'xl',
      top: 2,
      transform: 'translateX(-50%)',
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'full',
  },
};

export default Header;
