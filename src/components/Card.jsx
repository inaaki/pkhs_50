import { useStyleConfig, Box } from '@chakra-ui/react';
import React from 'react';

function Card({ children, variant, ...props }) {
  const style = useStyleConfig('Card', { variant });

  return (
    <Box __css={style} {...props}>
      {children}
    </Box>
  );
}

export default Card;
