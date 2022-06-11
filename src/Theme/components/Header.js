const Header = {
  parts: ['container', 'nav'],
  baseStyle: {
    container: {
      pos: 'fixed',
      zIndex: 'sticky',
      left: 0,
      transition: 'top 250ms ease',
    },
    nav: {
      px: [3, 5, 2, 16],
      transition: 'all 250ms ease',
    },
  },
  sizes: {
    full: { container: { width: 'full' } },
  },
  variants: {
    primary: {
      container: {
        borderBottom: '1px',
        borderColor: 'gray.200',
        bg: 'white',
        top: 0,
      },
      nav: {
        width: 'full',
      },
    },
    secondary: {
      container: {
        top: 2,
        bg: 'transparent',
      },
      nav: {
        bg: 'rgba(255,255,255,0.95)',
        boxShadow: 'dark-lg',
        rounded: 'xl',
        width: '95%',
        //
        '@supports (backdrop-filter: blur(0))': {
          backdropFilter: 'blur(5px)',
          bg: 'rgba(255,255,255,0.5)',
        },
      },
    },
  },
  defaultProps: {
    variant: 'primary',
    size: 'full',
  },
};

export default Header;
