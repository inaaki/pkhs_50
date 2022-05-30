import { Spinner } from '@chakra-ui/react';
import React from 'react';

function SimpleLoader({ size = 'lg' }) {
  return (
    <Spinner
      color="brand.500"
      emptyColor="gray.200"
      size={size}
      speed="650ms"
      thickness="2px"
    />
  );
}

export default SimpleLoader;
