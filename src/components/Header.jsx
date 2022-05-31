import { Center, chakra, useMultiStyleConfig } from '@chakra-ui/react';
import React from 'react';

function Header({ children, variant }) {
  const style = useMultiStyleConfig('Header', {
    variant: variant,
  });

  return (
    <Center __css={style.container}>
      <chakra.nav __css={style.nav}>{children}</chakra.nav>
    </Center>
  );
}

export default Header;
