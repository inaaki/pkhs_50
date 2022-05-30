import { Box } from '@chakra-ui/react';
import React from 'react';
import bg from '../assets/svg/wave.svg';

function withBackground(Component) {
  const style = {
    background: `top/contain url(${bg}) no-repeat`,
  };

  return props => (
    <Box minH="100vh" sx={style}>
      <Component {...props} />
    </Box>
  );
}

export default withBackground;
