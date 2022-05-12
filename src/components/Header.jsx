import { chakra, useStyleConfig } from '@chakra-ui/react';
import React from 'react';

function Header({ children, variant, size, ...props }) {
  const style = useStyleConfig('Header', {
    variant: variant,
    size: size,
  });

  return (
    <chakra.header __css={style} {...props}>
      {children}
    </chakra.header>
  );
}

export default Header;
